package com.coffee_break.coffee_break_backend.repository;

import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.model.enums.UserRole;
import com.coffee_break.coffee_break_backend.data.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.time.Instant;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class OrderRepositoryTest {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private TestEntityManager em;

    @Test
    void save_and_findByAppUserUserName_returnsOrder() {
        // --- arrange ---
        AppUser user = new AppUser();
        user.setUserRole(UserRole.CUSTOMER);
        user.setRealName("Charlie Coffee");
        user.setUserName("charlie");
        user.setPassword("espresso123");
        em.persist(user);

        CoffeeOrder order = new CoffeeOrder();
        order.setAppUser(user);
        order.setCreatedAt(Instant.now());
        em.persist(order);

        em.flush();

        Optional<CoffeeOrder> found = orderRepository.findByAppUser_UserName("charlie");

        assertThat(found).isPresent();
        assertThat(found.get().getAppUser().getRealName()).isEqualTo("Charlie Coffee");
        assertThat(found.get().getAppUser().getUserName()).isEqualTo("charlie");
        assertThat(found.get().getCreatedAt()).isNotNull();
    }

    @Test
    void findByAppUserUserName_returnsEmpty_whenNoMatch() {
        Optional<CoffeeOrder> missing = orderRepository.findByAppUser_UserName("unknown");

        assertThat(missing).isEmpty();
    }
}
