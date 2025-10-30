package com.coffee_break.coffee_break_backend.data.repository;

import com.coffee_break.coffee_break_backend.data.model.Cafe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CafeRepository extends CrudRepository<Cafe, Long> {
}
