package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.data.model.Coffee;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/coffee")
public class CoffeeController extends AbstractController<Coffee>{

}
