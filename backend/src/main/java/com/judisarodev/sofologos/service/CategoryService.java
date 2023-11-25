package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.dto.CategoryDto;
import com.judisarodev.sofologos.mapper.CategoryMapper;
import com.judisarodev.sofologos.model.Category;
import com.judisarodev.sofologos.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;
    public CategoryService(CategoryRepository categoryRepository, CategoryMapper categoryMapper){
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }
    public List<CategoryDto> findAll(){
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();
        for (Category category: categories) {
            categoryDtos.add(this.categoryMapper.CategoryToCategoryDto(category));
        }
        return categoryDtos;
    }
    public CategoryDto findById(Integer categoryId){
        return this.categoryMapper.CategoryToCategoryDto(categoryRepository.findById(categoryId).orElse(null));
    }
    public CategoryDto findByName(String name){
        return this.categoryMapper.CategoryToCategoryDto(categoryRepository.findByName(name).orElse(null));
    }

}
