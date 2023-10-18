package com.judisarodev.sofologos.controller;

import com.judisarodev.sofologos.model.Post;
import com.judisarodev.sofologos.request.PostItem;
import com.judisarodev.sofologos.service.CategoryService;
import com.judisarodev.sofologos.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("posts")
public class PostRestController {
    private final PostService postService;
    private CategoryService categoryService;
    public PostRestController(PostService postService, CategoryService categoryService){
        this.postService = postService;
        this.categoryService = categoryService;
    }
    @GetMapping("/get-all-posts")
    public ArrayList<PostItem> getAllPosts(){
        return postService.getAllPosts();
    }
    @GetMapping("/find-post-by-id/{id}")
    public Post findById(@PathVariable Integer id){
        return this.postService.findById(id);
    }
    @GetMapping("/create-post")
    public Post save(Post post){
        return this.postService.save(post);
    }
    @GetMapping("delete-post/{id}")
    public void deleteById(@PathVariable Integer id){
        this.postService.deleteById(id);
    }
}
