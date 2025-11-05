package com.coffee_break.coffee_break_backend.data.repository;

import com.coffee_break.coffee_break_backend.data.model.AppUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<AppUser, Long> {

    Optional<AppUser> findByUserName(String userName);

}
