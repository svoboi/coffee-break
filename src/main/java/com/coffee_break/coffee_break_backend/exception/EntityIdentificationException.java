package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EntityIdentificationException extends RuntimeException {
    public EntityIdentificationException(String errorMessage) {
        super(errorMessage);
    }
}
