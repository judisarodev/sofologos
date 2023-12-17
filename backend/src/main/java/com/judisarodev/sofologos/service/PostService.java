package com.judisarodev.sofologos.service;
import com.judisarodev.sofologos.dto.CategoryDto;
import com.judisarodev.sofologos.dto.DateDto;
import com.judisarodev.sofologos.mapper.CategoryMapper;
import com.judisarodev.sofologos.mapper.PostMapper;
import com.judisarodev.sofologos.model.Category;
import com.judisarodev.sofologos.model.Post;
import com.judisarodev.sofologos.repository.PostRepository;
import com.judisarodev.sofologos.dto.PostDto;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper postMapper;
    private final CategoryService categoryService;
    private CategoryMapper categoryMapper;
    public PostService(PostRepository postRepository, PostMapper postMapper, CategoryService categoryService, CategoryMapper categoryMapper){
        this.postRepository = postRepository;
        this.postMapper = postMapper;
        this.categoryService = categoryService;
        this.categoryMapper = categoryMapper;
    }
    public ArrayList<PostDto> getAll() {
        ArrayList<PostDto> postsDto = new ArrayList<>();
        for(Post p: postRepository.findAll()) {
            if(p.getActive() == true) {
                postsDto.add(this.postMapper.toPostDto(p));
            }
        }
        return postsDto;
    }
    @Transactional
    public void hidePost(Integer postId){
        this.postRepository.hidePost(postId);
    }

    @Transactional
    public void showPost(Integer postId){
        this.postRepository.showPost(postId);
    }

    public PostDto getById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        return this.postMapper.toPostDto(post);
    }
    public boolean save(PostDto givenPost) {
        Calendar date = this.postMapper.mapDateDtoToCalendar(givenPost.getDate());
        Category category = this.categoryMapper.CategoryDtoToCategory(this.categoryService.findByName(givenPost.getCategory()));
        System.out.println(category.getName());
        Post post;
        if(givenPost.getPostId() != null){
            post = new Post(
                    givenPost.getPostId(),
                    givenPost.getTitle(),
                    givenPost.getSummary(),
                    givenPost.getContent(),
                    givenPost.getViews(),
                    category,
                    date
            );
        }else{
            post = new Post(
                    givenPost.getTitle(),
                    givenPost.getSummary(),
                    givenPost.getContent(),
                    givenPost.getViews(),
                    category,
                    date
            );
        }
        postRepository.save(post);
        if(postRepository.findById(post.getPostId()).orElse(null) == null){
            return false;
        }else {
            return true;
        }

    }
    public boolean deleteById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        if(post == null){
            return false;
        }else {
            postRepository.deleteById(postId);
            return true;
        }
    }
    @Transactional
    public void addView(Integer postId){
        this.postRepository.addView(postId);
        System.out.println("Se ha sumado una vista al post " + postId);
    }
}
