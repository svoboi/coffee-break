package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class InvalidEntityException extends RuntimeException {
    public InvalidEntityException(String errorMessage) {
        super(errorMessage);
    }
}
