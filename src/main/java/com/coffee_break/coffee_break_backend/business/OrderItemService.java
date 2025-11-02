package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.OrderItem;
import com.coffee_break.coffee_break_backend.data.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderItemService extends AbstractService<OrderItem> {

    public OrderItemService(@Autowired OrderItemRepository orderItemRepository) {
        super(orderItemRepository);
    }

}
