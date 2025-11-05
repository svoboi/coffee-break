package com.coffee_break.coffee_break_backend.data.repository;

import com.coffee_break.coffee_break_backend.data.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findByCoffee_Id(Long coffeeId);

}