package com.coffee_break.coffee_break_backend.data.model;

import com.coffee_break.coffee_break_backend.data.model.enums.OrderState;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class CoffeeOrder implements EntityWithId {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @Enumerated(EnumType.STRING)
    private OrderState state;

    @NonNull
    @ManyToOne
    private AppUser customer;

    @OneToMany
    private List<OrderItem> items;

    @NonNull
    @org.hibernate.annotations.CreationTimestamp
    @Column(nullable = false, updatable = false)
    private java.time.Instant createdAt;
}
