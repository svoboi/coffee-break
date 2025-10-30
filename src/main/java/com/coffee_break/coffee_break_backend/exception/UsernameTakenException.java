package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class UsernameTakenException extends RuntimeException {
    public UsernameTakenException(String errorMessage) {
        super(errorMessage);
    }
}
