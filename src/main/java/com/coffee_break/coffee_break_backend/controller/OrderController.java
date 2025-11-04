package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.OrderService;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController extends AbstractController<CoffeeOrder> {

    OrderController(OrderService orderService) {
        super(orderService);
    }

    @Override
    public ResponseEntity<CoffeeOrder> createProduct(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = CoffeeOrder.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Order",
                                            value = """
                                                    {
                                                      "appUser": {
                                                        "id": 1
                                                      },
                                                      "createdAt": "2025-11-04T21:03:03.101Z"
                                                    }""")
                            }))
            CoffeeOrder order) {
        return super.createProduct(order);
    }

}
