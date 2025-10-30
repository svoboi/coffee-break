 package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.AbstractService;
import com.coffee_break.coffee_break_backend.data.model.EntityWithId;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.NoSuchElementException;

//https://www.baeldung.com/spring-cors

@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin
public abstract class AbstractController<EntityType extends EntityWithId> {
    public AbstractService<EntityType> service;

    @PostMapping
    public ResponseEntity<EntityType> createProduct(@RequestBody @Validated EntityType entity) {
        return new ResponseEntity<>(service.create(entity), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Iterable<EntityType>> readAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> readByID(@PathVariable Long id) {
        return new ResponseEntity<>(service.findById(id).get(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@RequestBody @Validated EntityType entity, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(entity, id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        if (service.findById(id).isEmpty()) {
            throw new NoSuchElementException();
        }
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
