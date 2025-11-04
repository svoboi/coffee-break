package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.CoffeeService;
import com.coffee_break.coffee_break_backend.data.model.Coffee;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/coffee")
public class CoffeeController extends AbstractController<Coffee>{

    CoffeeController(CoffeeService coffeeService) {
        super(coffeeService);
    }

    @Override
    public ResponseEntity<Coffee> createProduct(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Coffee.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Espresso",
                                            value = """
                                                    {
                                                        "name": "Espresso",
                                                        "price": 59.9,
                                                        "currency": "CZK"
                                                    }"""),
                                    @ExampleObject(
                                            name = "Latte Macchiato",
                                            value = """
                                                    {
                                                        "name": "Espresso",
                                                        "price": 79.9,
                                                        "currency": "CZK"
                                                    }""")
                            }))
            Coffee coffee) {
        return super.createProduct(coffee);
    }

}
