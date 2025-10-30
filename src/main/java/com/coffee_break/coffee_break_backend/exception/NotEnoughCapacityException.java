package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class NotEnoughCapacityException extends RuntimeException {
    public NotEnoughCapacityException(String errorMessage) {
        super(errorMessage);
    }
}
