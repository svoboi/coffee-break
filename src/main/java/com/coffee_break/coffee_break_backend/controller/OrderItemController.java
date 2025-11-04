package com.coffee_break.coffee_break_backend.controller;


import com.coffee_break.coffee_break_backend.business.OrderItemService;
import com.coffee_break.coffee_break_backend.data.model.OrderItem;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orderItem")
public class OrderItemController extends AbstractController<OrderItem> {

    OrderItemController(OrderItemService orderItemService) {
        super(orderItemService);
    }

    @Override
    public ResponseEntity<OrderItem> createProduct(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = OrderItem.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Two espressos",
                                            value = """
                                                    {
                                                      "order": { "id": 1 },
                                                      "coffee": { "id": 1 },
                                                      "quantity": 2
                                                    }"""),
                                    @ExampleObject(
                                            name = "Three Lattes",
                                            value = """
                                                    {
                                                      "order": { "id": 1 },
                                                      "coffee": { "id": 2 },
                                                      "quantity": 3
                                                    }""")
                            }))
            OrderItem orderItem) {
        return super.createProduct(orderItem);
    }

}
