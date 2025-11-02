package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.AppUser;
import com.coffee_break.coffee_break_backend.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService extends AbstractService<AppUser> {

    public UserService(@Autowired UserRepository userRepository) {
        super(userRepository);
    }

}
