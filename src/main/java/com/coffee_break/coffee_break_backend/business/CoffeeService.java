package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.Coffee;
import com.coffee_break.coffee_break_backend.data.repository.CoffeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoffeeService extends AbstractService<Coffee> {

    public CoffeeService(@Autowired CoffeeRepository coffeeRepository) {
        super(coffeeRepository);
    }

}
