package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Category;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.Optional;

public interface CategoryRepository extends ListCrudRepository<Category, Integer> {
    List<Category> findAll();
    Optional<Category> findById(Integer categoryId);
    Optional<Category> findByName(String name);
}
