package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.OrderService;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController extends AbstractController<CoffeeOrder> {

    OrderController(OrderService orderService) {
        super(orderService);
    }

}
