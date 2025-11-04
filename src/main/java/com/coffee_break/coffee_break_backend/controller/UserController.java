package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.UserService;
import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
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

    @GetMapping("/{userId}/order")
    public ResponseEntity<List<CoffeeOrder>> getUserOrders(@PathVariable Long userId) {
        return new ResponseEntity<>(((UserService) service).getCoffeeOrdersForUserId(userId), HttpStatus.OK);
    }

}
