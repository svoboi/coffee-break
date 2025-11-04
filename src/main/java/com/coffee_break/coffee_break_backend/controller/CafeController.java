package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.CafeService;
import com.coffee_break.coffee_break_backend.data.model.Cafe;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cafe")
public class CafeController extends AbstractController<Cafe> {

    CafeController(CafeService cafeService) {
        super(cafeService);
    }

    @Override
    public ResponseEntity<Cafe> createProduct(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = Cafe.class),
                    examples = {
                            @ExampleObject(
                                    name = "Cafe without orders",
                                    value = """
                                        {
                                            "name": "Kavárna PEF",
                                            "description": "Jen vyběhnout do patra!",
                                            "address": "V Patře 123",
                                            "coffeeOrderList": []
                                        }"""),
                            @ExampleObject(
                                    name = "Cafe with orders",
                                    value = """
                                        {
                                            "name": "Kavárna TF",
                                            "description": "Pozor, otevřeno jen do čtyř!",
                                            "address": "V přízemí 456",
                                            "coffeeOrderList":
                                            [
                                                { "id": 1 }, { "id": 2 }
                                            ]
                                        }""")
                            }))
            Cafe cafe) {
        return super.createProduct(cafe);
    }


}
