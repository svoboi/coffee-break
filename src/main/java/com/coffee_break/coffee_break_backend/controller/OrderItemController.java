package com.coffee_break.coffee_break_backend.controller;


import com.coffee_break.coffee_break_backend.business.OrderItemService;
import com.coffee_break.coffee_break_backend.data.model.OrderItem;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orderItem")
public class OrderItemController extends AbstractController<OrderItem> {

    OrderItemController(OrderItemService orderItemService) {
        super(orderItemService);
    }

}
