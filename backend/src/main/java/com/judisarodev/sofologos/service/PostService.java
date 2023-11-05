package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.dto.DateDto;
import com.judisarodev.sofologos.model.Category;
import com.judisarodev.sofologos.model.Post;
import com.judisarodev.sofologos.model.User;
import com.judisarodev.sofologos.repository.PostRepository;
import com.judisarodev.sofologos.dto.PostDto;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final CategoryService categoryService;
    private final UserService userService;
    public PostService(PostRepository postRepository, CategoryService categoryService, UserService userService){
        this.postRepository = postRepository;
        this.categoryService = categoryService;
        this.userService = userService;
    }
    public ArrayList<PostDto> getAll() {
        ArrayList<PostDto> postsDto = new ArrayList<>();
        for(Post p: postRepository.findAll()){
            String category = categoryService.findById(p.getCategory().getCategoryId()).getName();
            String username = userService.getById(p.getUser().getUserId()).getUsername();
            DateDto date = new DateDto(
                    Integer.toString(p.getDate().get(Calendar.DATE)),
                    Integer.toString(p.getDate().get(Calendar.MONTH)),
                    Integer.toString(p.getDate().get(Calendar.YEAR)));
            postsDto.add(
                    new PostDto(
                            p.getPostId(),
                            p.getTitle(),
                            category,
                            p.getSummary(),
                            p.getContent(),
                            p.getLikes(),
                            p.getViews(),
                            username,
                            date
                    )
            );
        }
        return postsDto;
    }
    public PostDto getById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        String category = this.categoryService.findById(post.getCategory().getCategoryId()).toString();
        DateDto date = new DateDto(
                Integer.toString(post.getDate().get(Calendar.DATE)),
                Integer.toString(post.getDate().get(Calendar.MONTH)),
                Integer.toString(post.getDate().get(Calendar.YEAR)));
        return new PostDto(
                post.getPostId(),
                post.getTitle(),
                category,
                post.getSummary(),
                post.getContent(),
                post.getLikes(),
                post.getViews(),
                "username",
                date
        );
    }
    public Boolean save(PostDto givenPost) {
        Category category = categoryService.findByName(givenPost.getCategory());
        User user = userService.getByUsername(givenPost.getUsername());
        Calendar date = new GregorianCalendar(
                Integer.parseInt(givenPost.getDate().getYear()),
                Integer.parseInt(givenPost.getDate().getMonth()),
                Integer.parseInt(givenPost.getDate().getDate()));

        Post post = postRepository.save(
                new Post(
                        givenPost.getTitle(),
                        givenPost.getSummary(),
                        givenPost.getContent(),
                        givenPost.getLikes(),
                        givenPost.getViews(),
                        user,
                        category,
                        date
                )
        );
        if(postRepository.findById(post.getPostId()).orElse(null) == null){
            return Boolean.FALSE;
        }else{
            return Boolean.TRUE;
        }
    }
    public Boolean deleteById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        if(post == null){
            return Boolean.FALSE;
        }else {
            postRepository.deleteById(postId);
            return Boolean.TRUE;
        }
    }
}
