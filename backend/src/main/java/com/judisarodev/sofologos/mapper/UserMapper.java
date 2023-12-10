package com.judisarodev.sofologos.mapper;

import com.judisarodev.sofologos.dto.UserDto;
import com.judisarodev.sofologos.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mappings(
            @Mapping(source = "user.role.name", target = "role")
    )
    public UserDto userToUseDto(User user);
}
