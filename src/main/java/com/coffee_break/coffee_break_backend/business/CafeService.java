package com.coffee_break.coffee_break_backend.business;

import com.coffee_break.coffee_break_backend.data.model.Cafe;
import com.coffee_break.coffee_break_backend.data.repository.CafeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CafeService extends AbstractService<Cafe> {

//    @Autowired
//    private CafeRepository cafeRepository;

    public CafeService(@Autowired CafeRepository cafeRepository) {
        super(cafeRepository);
    }

}
