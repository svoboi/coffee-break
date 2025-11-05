package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.UserService;
import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController extends AbstractController<AppUser> {

    UserController(UserService userService) {
        super(userService);
    }

    @Override
    public ResponseEntity<AppUser> createProduct(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = AppUser.class),
                            examples = {
                                    @ExampleObject(
                                            name = "Customer",
                                            value = """
                                                    {
                                                      "userRole": "CUSTOMER",
                                                      "realName": "Barbora Štamgastová",
                                                      "userName": "stambar",
                                                      "password": "kava"
                                                    }"""),
                                    @ExampleObject(
                                            name = "Employee",
                                            value = """
                                                    {
                                                      "userRole": "CAFE_EMPLOYEE",
                                                      "realName": "Adéla Zaměstnaná",
                                                      "userName": "zamade",
                                                      "password": "kavovar"
                                                    }""")
                            }))
            AppUser user) {
        return super.createProduct(user);
    }

    @GetMapping("/{userId}/order")
    public ResponseEntity<List<CoffeeOrder>> getUserOrders(@PathVariable Long userId) {
        return new ResponseEntity<>(((UserService) service).getCoffeeOrdersForUserId(userId), HttpStatus.OK);
    }

}
