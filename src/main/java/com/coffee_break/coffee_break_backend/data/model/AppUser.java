package com.coffee_break.coffee_break_backend.data.model;

import com.coffee_break.coffee_break_backend.data.model.enums.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
public class AppUser implements EntityWithId{

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private UserRole userRole;
    @NonNull
    private String realName;
    @NonNull
    private String userName;
    @NonNull
    private String password;

    @OneToOne
    private CoffeeOrder currentCoffeeOrder;
}
