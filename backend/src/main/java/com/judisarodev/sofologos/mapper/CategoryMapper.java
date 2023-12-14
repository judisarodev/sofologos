package com.judisarodev.sofologos.mapper;

import com.judisarodev.sofologos.dto.CategoryDto;
import com.judisarodev.sofologos.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.stereotype.Component;
@Mapper(componentModel = "spring")
@Component
public interface CategoryMapper {
    @Mappings({
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "categoryId", target = "categoryId")
    })
    CategoryDto CategoryToCategoryDto(Category category);

    @Mappings({
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "categoryId", target = "categoryId")
    })
    Category CategoryDtoToCategory(CategoryDto categoryDto);
}
