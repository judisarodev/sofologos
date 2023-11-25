package com.judisarodev.sofologos.mapper;

import com.judisarodev.sofologos.model.Follower;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface FollowerMapper {
    Follower toFollower(String email);
}
