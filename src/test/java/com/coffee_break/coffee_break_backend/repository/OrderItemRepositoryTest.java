package com.coffee_break.coffee_break_backend.repository;

import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.model.Coffee;
import com.coffee_break.coffee_break_backend.data.model.CoffeeOrder;
import com.coffee_break.coffee_break_backend.data.model.OrderItem;
import com.coffee_break.coffee_break_backend.data.repository.OrderItemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class OrderItemRepositoryTest {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private TestEntityManager em;

    @Test
    void findByCoffeeId_returnsItemsForThatCoffee() {
        AppUser user = new AppUser();
        user.setRealName("Bob");
        user.setUserName("bob");
        user.setPassword("hunter2");
        em.persist(user);

        Coffee americano = new Coffee();
        americano.setName("Americano");
        americano.setPrice(2.80);
        em.persist(americano);

        CoffeeOrder order = new CoffeeOrder();
        order.setCustomer(user);
        em.persist(order);

        OrderItem item = new OrderItem();
        item.setCoffee(americano);
        item.setQuantity(3);
        em.persist(item);

        em.flush();

        List<OrderItem> items = orderItemRepository.findByCoffee_Id(americano.getId());

        assertThat(items).hasSize(1);
        OrderItem found = items.get(0);
        assertThat(found.getQuantity()).isEqualTo(3);
    }
}
