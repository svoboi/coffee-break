 package com.coffee_break.coffee_break_backend.controller;

import com.coffee_break.coffee_break_backend.business.AbstractService;
import com.coffee_break.coffee_break_backend.data.model.EntityWithId;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

//https://www.baeldung.com/spring-cors

@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin
public abstract class AbstractController<EntityType extends EntityWithId> {
    public AbstractService<EntityType> service;

    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Created"),
            @ApiResponse(responseCode = "400", description = "Bad request")})
    @PostMapping
    public ResponseEntity<EntityType> createProduct(@RequestBody @Validated EntityType entity) {
        return new ResponseEntity<>(service.create(entity), HttpStatus.CREATED);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "400", description = "Bad request")})
    @GetMapping
    public ResponseEntity<Iterable<EntityType>> readAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "400", description = "Bad request"),
            @ApiResponse(responseCode = "404", description = "Not Found")})
    @GetMapping("/{id}")
    public ResponseEntity<Object> readByID(@PathVariable Long id) {
        return new ResponseEntity<>(service.findById(id).get(), HttpStatus.OK);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "400", description = "Bad request"),
            @ApiResponse(responseCode = "404", description = "Not Found")})
    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@RequestBody @Validated EntityType entity, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(entity, id), HttpStatus.OK);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "400", description = "Bad request"),
            @ApiResponse(responseCode = "404", description = "Not Found")})
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        if (service.findById(id).isEmpty()) {
            throw new NoSuchElementException();
        }
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
