package com.coffee_break.coffee_break_backend.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ConflictingEntityExistsException extends RuntimeException {
    public ConflictingEntityExistsException(String errorMessage) {
        super(errorMessage);
    }
}
