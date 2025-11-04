package com.coffee_break.coffee_break_backend.data.repository;

import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends CrudRepository<CoffeeOrder, Long> {

    Optional<CoffeeOrder> findByAppUser_UserName(String userName);

    List<CoffeeOrder> findByAppUserIdOrderByCreatedAtDesc(Long userId);
}
