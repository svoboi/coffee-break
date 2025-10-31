package com.coffee_break.coffee_break_backend.data.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Cafe implements EntityWithId {

    @Id
    @GeneratedValue
    private Long id;

    // todo: add NotNull / NotBlank where needed
    private String name;
    private String description;
    private String address;

}
