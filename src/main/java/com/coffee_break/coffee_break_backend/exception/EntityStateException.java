package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EntityStateException extends RuntimeException {

    public EntityStateException(String errorMessage) {
        super(errorMessage);
    }
}
