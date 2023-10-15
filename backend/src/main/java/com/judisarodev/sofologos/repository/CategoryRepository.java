package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Category save(Category category);
    Category getById(int categoryId);
    void deleteById(int categoryId);
}
