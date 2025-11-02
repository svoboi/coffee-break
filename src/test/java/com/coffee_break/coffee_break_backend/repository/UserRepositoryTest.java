package com.coffee_break.coffee_break_backend.repository;

import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.time.Instant;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestEntityManager em;

    @Test
    void findByUserName_returnsUser() {
        AppUser u = new AppUser();
        u.setRealName("Alice");
        u.setUserName("alice");
        u.setPassword("secret");
        userRepository.save(u);
        em.flush();

        Optional<AppUser> found = userRepository.findByUserName("alice");

        assertThat(found).isPresent();
        assertThat(found.get().getRealName()).isEqualTo("Alice");
    }

    @Test
    void findByCurrentCoffeeOrderId_returnsUser() {
        // arrange
        AppUser u = new AppUser();
        u.setRealName("Bob");
        u.setUserName("bob");
        u.setPassword("hunter2");
        userRepository.save(u);

        CoffeeOrder order = new CoffeeOrder();
        order.setCreatedAt(Instant.now());
        order.setAppUser(u);
        em.persist(order);

        u.setCurrentCoffeeOrder(order);
        userRepository.save(u);

        em.flush();

        Optional<AppUser> found = userRepository.findByCurrentCoffeeOrder_Id(order.getId());

        assertThat(found).isPresent();
        assertThat(found.get().getUserName()).isEqualTo("bob");
    }
}