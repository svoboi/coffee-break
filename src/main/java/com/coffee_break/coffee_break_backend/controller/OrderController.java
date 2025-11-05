package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.OrderService;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.model.enums.OrderState;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
                                                      "customer": {
                                                        "id": 1
                                                      },
                                                      "items": [{"id": 1}, {"id": 2}],
                                                      "state": "NEW",
                                                      "cafe": {"id":1},
                                                      "createdAt": "2025-11-04T21:03:03.101Z"
                                                    }""")
                            }))
            CoffeeOrder order) {
        return super.createProduct(order);
    }

    @PostMapping("/{id}/status")
    public ResponseEntity<CoffeeOrder> updateOrder (
            @PathVariable Long id,
            @RequestParam @Validated OrderState newState) {
        return new ResponseEntity<>(((OrderService) service).updateStatus(id, newState), HttpStatus.OK);
    }

}
