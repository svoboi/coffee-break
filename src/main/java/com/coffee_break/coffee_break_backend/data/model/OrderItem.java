package com.coffee_break.coffee_break_backend.data.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
@Table(name = "order_item",
        uniqueConstraints = @UniqueConstraint(columnNames = {"order_id", "coffee_id"}))
public class OrderItem implements EntityWithId {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "coffee_id", nullable = false)
    private Coffee coffee;

    @NonNull
    @Column(nullable = false)
    private Integer quantity;

}
