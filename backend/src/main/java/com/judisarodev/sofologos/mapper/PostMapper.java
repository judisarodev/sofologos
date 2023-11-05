package com.judisarodev.sofologos.mapper;

import com.judisarodev.sofologos.dto.DateDto;
import com.judisarodev.sofologos.dto.PostDto;
import com.judisarodev.sofologos.model.Post;
import org.mapstruct.*;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.GregorianCalendar;

@Mapper(componentModel = "spring")
@Component
public interface PostMapper {
    @Named("mapCalendarToDateDto")
    default DateDto mapCalendarToDateDto(Calendar calendar){
        DateDto date = new DateDto(
                Integer.toString(calendar.get(Calendar.DATE)),
                Integer.toString(calendar.get(Calendar.MONTH)),
                Integer.toString(calendar.get(Calendar.YEAR)));
        return date;
    }
    @Named("mapDateDtoToCalendar")
    default Calendar mapDateDtoToCalendar(DateDto dateDto){
        Calendar calendar = new GregorianCalendar(
                Integer.parseInt(dateDto.getYear()),
                Integer.parseInt(dateDto.getMonth()),
                Integer.parseInt(dateDto.getDate()));
        return calendar;
    }
    @Mappings({
            @Mapping(source = "user.username", target = "username"),
            @Mapping(source = "category.name", target = "category"),
            @Mapping(source = "post.date", target = "date", qualifiedByName = "mapCalendarToDateDto")
    })
    PostDto toPostDto(Post post);
    @Mappings({
            @Mapping(source = "username", target = "user.username"),
            @Mapping(source = "category", target = "category.categoryId"),
            @Mapping(source = "postDto.date", target = "date", qualifiedByName = "mapDateDtoToCalendar")
    })
    Post toPost(PostDto postDto);

}
