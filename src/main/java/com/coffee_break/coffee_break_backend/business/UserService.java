package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.repository.OrderRepository;
import com.coffee_break.coffee_break_backend.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService extends AbstractService<AppUser> {

    OrderRepository orderRepository;

    public UserService(
            @Autowired UserRepository userRepository,
            @Autowired OrderRepository orderRepository) {
        super(userRepository);
        this.orderRepository = orderRepository;
    }

    public List<CoffeeOrder> getCoffeeOrdersForUserId(Long userId) {
        return orderRepository.findByAppUserIdOrderByCreatedAtDesc(userId);
    }

}
