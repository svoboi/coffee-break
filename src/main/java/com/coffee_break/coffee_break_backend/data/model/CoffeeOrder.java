package com.coffee_break.coffee_break_backend.data.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
public class CoffeeOrder implements EntityWithId {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @ManyToOne
    private AppUser customer;

    @NonNull
    @org.hibernate.annotations.CreationTimestamp
    @Column(nullable = false, updatable = false)
    private java.time.Instant createdAt;
}
