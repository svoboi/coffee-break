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
    void findByOrderId_returnsAllItemsForOrder() {
        AppUser user = new AppUser();
        user.setRealName("Alice");
        user.setUserName("alice");
        user.setPassword("secret");
        em.persist(user);

        Coffee espresso = new Coffee();
        espresso.setName("Espresso");
        espresso.setPrice(2.00);
        em.persist(espresso);

        Coffee latte = new Coffee();
        latte.setName("Latte");
        latte.setPrice(3.50);
        em.persist(latte);

        CoffeeOrder order = new CoffeeOrder();
        order.setAppUser(user);
        em.persist(order);

        OrderItem i1 = new OrderItem();
        i1.setOrder(order);
        i1.setCoffee(espresso);
        i1.setQuantity(2);
        em.persist(i1);

        OrderItem i2 = new OrderItem();
        i2.setOrder(order);
        i2.setCoffee(latte);
        i2.setQuantity(1);
        em.persist(i2);

        em.flush();

        List<OrderItem> items = orderItemRepository.findByOrder_Id(order.getId());

        assertThat(items).hasSize(2);

        List<String> names = new ArrayList<>();
        for (OrderItem it : items) {
            names.add(it.getCoffee().getName());
        }

        assertThat(names).containsExactlyInAnyOrder("Espresso", "Latte");

        OrderItem espressoItem = items.stream()
                .filter(it -> "Espresso".equals(it.getCoffee().getName()))
                .findFirst()
                .orElseThrow();
        assertThat(espressoItem.getQuantity()).isEqualTo(2);
    }

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
        order.setAppUser(user);
        em.persist(order);

        OrderItem item = new OrderItem();
        item.setOrder(order);
        item.setCoffee(americano);
        item.setQuantity(3);
        em.persist(item);

        em.flush();

        List<OrderItem> items = orderItemRepository.findByCoffee_Id(americano.getId());

        assertThat(items).hasSize(1);
        OrderItem found = items.get(0);
        assertThat(found.getOrder().getId()).isEqualTo(order.getId());
        assertThat(found.getQuantity()).isEqualTo(3);
    }
}
