package com.coffee_break.coffee_break_backend.data.repository;

import com.coffee_break.coffee_break_backend.data.model.Coffee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CoffeeRepository extends CrudRepository<Coffee, Long> {

    Optional<Coffee> findByName(String name);

}
