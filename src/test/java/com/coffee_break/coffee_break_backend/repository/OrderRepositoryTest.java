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
import java.util.List;
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
        order.setCustomer(user);
        order.setCreatedAt(Instant.now());
        em.persist(order);

        em.flush();

        Optional<CoffeeOrder> found = orderRepository.findByCustomer_UserName("charlie");

        assertThat(found).isPresent();
        assertThat(found.get().getCustomer().getRealName()).isEqualTo("Charlie Coffee");
        assertThat(found.get().getCustomer().getUserName()).isEqualTo("charlie");
        assertThat(found.get().getCreatedAt()).isNotNull();
    }

    @Test
    void findByAppUserUserName_returnsEmpty_whenNoMatch() {
        Optional<CoffeeOrder> missing = orderRepository.findByCustomer_UserName("unknown");

        assertThat(missing).isEmpty();
    }

    @Test
    void findByCustomerIdOrderByCreatedAtDesc() {
        AppUser user = new AppUser();
        user.setUserRole(UserRole.CUSTOMER);
        user.setRealName("Charlie Coffee");
        user.setUserName("charlie");
        user.setPassword("espresso123");
        em.persist(user);
        CoffeeOrder order = new CoffeeOrder();
        order.setCustomer(user);
        order.setCreatedAt(Instant.now());
        em.persist(order);
        em.flush();

        CoffeeOrder order3 = new CoffeeOrder();
        order3.setCustomer(user);
        order3.setCreatedAt(Instant.now());
        em.persist(order3);
        em.flush();

        CoffeeOrder order4 = new CoffeeOrder();
        order4.setCustomer(user);
        order4.setCreatedAt(Instant.now().minusSeconds(10000));
        em.persist(order4);
        em.flush();

        AppUser user2 = new AppUser();
        user2.setUserRole(UserRole.CUSTOMER);
        user2.setRealName("Debbie Coffee");
        user2.setUserName("debbie");
        user2.setPassword("espresso123");
        em.persist(user2);
        CoffeeOrder order2 = new CoffeeOrder();
        order2.setCustomer(user2);
        order2.setCreatedAt(Instant.now());
        em.persist(order2);
        em.flush();


        List<CoffeeOrder> found = orderRepository.findByCustomerIdOrderByCreatedAtDesc(user.getId());
        assertThat(found).hasSize(3);
        assertThat(found.get(0).getCreatedAt().equals(order.getCreatedAt()));
        assertThat(found.get(1).getCreatedAt().equals(order3.getCreatedAt()));
        assertThat(found.get(2).getCreatedAt().equals(order4.getCreatedAt()));
    }
}
