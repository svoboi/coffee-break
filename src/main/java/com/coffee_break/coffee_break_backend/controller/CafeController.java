package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.CafeService;
import com.coffee_break.coffee_break_backend.data.model.Cafe;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cafe")
public class CafeController extends AbstractController<Cafe> {

    CafeController(CafeService cafeService) {
        super(cafeService);
    }

}
