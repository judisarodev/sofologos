package com.judisarodev.sofologos.controller;

import com.judisarodev.sofologos.dto.CategoryDto;
import com.judisarodev.sofologos.service.CategoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryRestController {
    private final CategoryService categoryService;
    public CategoryRestController(CategoryService categoryService){
        this.categoryService = categoryService;
    }
    @GetMapping("/get-all")
    public List<CategoryDto> getAllCategories(){
        return this.categoryService.findAll();
    }
}
