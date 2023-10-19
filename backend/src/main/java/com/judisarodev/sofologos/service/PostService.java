package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.model.Category;
import com.judisarodev.sofologos.model.Post;
import com.judisarodev.sofologos.model.User;
import com.judisarodev.sofologos.repository.PostRepository;
import com.judisarodev.sofologos.dto.PostDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

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
            postsDto.add(
                    new PostDto(
                            p.getPostId(),
                            p.getTitle(),
                            category,
                            p.getSummary(),
                            p.getContent(),
                            p.getLikes(),
                            p.getViews(),
                            username
                    )
            );
        }
        return postsDto;
    }
    public PostDto getById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        String category = this.categoryService.findById(post.getCategory().getCategoryId()).toString();
        return new PostDto(post.getPostId(), post.getTitle(), category, post.getSummary(), post.getContent(), post.getLikes(), post.getViews(), "username");
    }
    public Boolean save(PostDto givenPost) {
        Category category = categoryService.findByName(givenPost.getCategory());
        User user = userService.getByUsername(givenPost.getUsername());
        Post post = postRepository.save(
                new Post(
                        givenPost.getTitle(),
                        givenPost.getSummary(),
                        givenPost.getContent(),
                        givenPost.getLikes(),
                        givenPost.getViews(),
                        user,
                        category
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
