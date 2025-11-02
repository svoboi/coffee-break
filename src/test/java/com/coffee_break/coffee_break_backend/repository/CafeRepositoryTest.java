package com.coffee_break.coffee_break_backend.repository;

import com.coffee_break.coffee_break_backend.data.model.Cafe;
import com.coffee_break.coffee_break_backend.data.repository.CafeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class CafeRepositoryTest {

    @Autowired
    private CafeRepository cafeRepository;

    // Useful because CrudRepository has no saveAndFlush
    @Autowired
    private TestEntityManager em;

    @Test
    void save_and_findByName_returnsCafe() {
        // arrange
        Cafe cafe = new Cafe();
        cafe.setName("Downtown Cafe");
        cafe.setAddress("123 Main St");
        cafe.setDescription("Cozy spot");
        cafeRepository.save(cafe);
        em.flush(); // ensure INSERT happens before SELECT

        // act
        Optional<Cafe> found = cafeRepository.findByName("Downtown Cafe");

        // assert
        assertThat(found).isPresent();
        assertThat(found.get().getAddress()).isEqualTo("123 Main St");
        assertThat(found.get().getDescription()).isEqualTo("Cozy spot");
    }

    @Test
    void findByName_returnsEmpty_whenNoMatch() {
        // act
        Optional<Cafe> missing = cafeRepository.findByName("No Such Cafe");

        // assert
        assertThat(missing).isEmpty();
    }
}
