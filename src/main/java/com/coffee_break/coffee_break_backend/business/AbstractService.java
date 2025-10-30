package com.coffee_break.coffee_break_backend.business;


import com.coffee_break.coffee_break_backend.data.model.EntityWithId;
import com.coffee_break.coffee_break_backend.exception.ConflictingEntityExistsException;
import com.coffee_break.coffee_break_backend.exception.EntityIdentificationException;
import com.coffee_break.coffee_break_backend.exception.EntityNotFoundException;
import com.coffee_break.coffee_break_backend.exception.EntityStateException;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;
import java.util.Optional;

@AllArgsConstructor
@NoArgsConstructor
public abstract class AbstractService<EntityType extends EntityWithId> {

    CrudRepository<EntityType, Long> repository;

    public EntityType create(EntityType entity) throws EntityStateException {
        if (exists(entity))
            throw new ConflictingEntityExistsException();
        return repository.save(entity);
    }

    public Optional<EntityType> findById(Long id) {
        return repository.findById(id);
    }

    public Iterable<EntityType> findAll() {
        return repository.findAll();
    }

    public EntityType update(EntityType entity, Long pathId) throws EntityStateException {
        if (entity.getId() == null || !entity.getId().equals(pathId)) {
            throw new EntityIdentificationException();
        }
        if (!repository.existsById(entity.getId())) {
            throw new EntityNotFoundException(entity.getClass().getName());
        }
        return repository.save(entity);}

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public Boolean exists(EntityType entity) {
        Long id = entity.getId();
        return id != null && repository.existsById(id);
    }

}
