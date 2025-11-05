package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.model.enums.OrderState;
import com.coffee_break.coffee_break_backend.data.repository.OrderRepository;
import com.coffee_break.coffee_break_backend.exception.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService extends AbstractService<CoffeeOrder> {

    public OrderService(@Autowired OrderRepository orderRepository) {
        super(orderRepository);
    }

    public CoffeeOrder updateStatus(Long orderId, OrderState newState) {
        CoffeeOrder order = repository.findById(orderId).orElseThrow(() -> new EntityNotFoundException("Order not found"));
        order.setState(newState);
        return repository.save(order);
    }

}
