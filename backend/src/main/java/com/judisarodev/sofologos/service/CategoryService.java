package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.model.Category;
import com.judisarodev.sofologos.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }
    public List<Category> findAll(){
        return categoryRepository.findAll();
    }
    public Category findById(Integer categoryId){
        return categoryRepository.findById(categoryId).orElse(null);
    }
    public Category findByName(String name){
        return categoryRepository.findByName(name).orElse(null);
    }

}