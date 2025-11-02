package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService extends AbstractService<CoffeeOrder> {

    public OrderService(@Autowired OrderRepository orderRepository) {
        super(orderRepository);
    }

}
