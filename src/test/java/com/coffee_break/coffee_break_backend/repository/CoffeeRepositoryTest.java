package com.coffee_break.coffee_break_backend.repository;

import com.coffee_break.coffee_break_backend.data.model.Coffee;
import com.coffee_break.coffee_break_backend.data.repository.CoffeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class CoffeeRepositoryTest {

    @Autowired
    private CoffeeRepository repo;

    @Test
    void save_and_findById() {
        Coffee c = new Coffee();
        c.setName("Latte");
        c.setPrice(3.50);

        Coffee saved = repo.save(c);
        assertThat(saved.getId()).isNotNull();

        Optional<Coffee> found = repo.findById(saved.getId());
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("Latte");
        assertThat(found.get().getPrice()).isEqualTo(3.50);
    }

    @Test
    void findByName_returnsMatch() {
        Coffee c = new Coffee();
        c.setName("Espresso");
        c.setPrice(2.00);

        Coffee saved = repo.save(c);
        assertThat(saved.getId()).isNotNull();

        assertThat(repo.findByName("Espresso"))
                .isPresent()
                .get()
                .extracting(Coffee::getPrice)
                .isEqualTo(2.00);
    }
}
