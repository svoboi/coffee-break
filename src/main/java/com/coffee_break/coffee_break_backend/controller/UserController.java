package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.UserService;
import com.coffee_break.coffee_break_backend.data.model.AppUser;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController extends AbstractController<AppUser> {

    UserController(UserService userService) {
        super(userService);
    }

}
