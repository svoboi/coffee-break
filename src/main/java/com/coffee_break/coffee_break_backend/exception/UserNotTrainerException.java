package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UserNotTrainerException extends RuntimeException {
    public UserNotTrainerException(String errorMessage) {
        super(errorMessage);
    }
}
