package com.judisarodev.sofologos.controller;
import com.judisarodev.sofologos.dto.PostDto;
import com.judisarodev.sofologos.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/posts")
public class PostRestController {
    private final PostService postService;
    public PostRestController(PostService postService){
        this.postService = postService;
    }
    @GetMapping("/get-all")
    public ResponseEntity<ArrayList<PostDto>> getAll(){
        return ResponseEntity.ok(this.postService.getAll());
    }
    @GetMapping("/get-posts")
    public ResponseEntity<ArrayList<PostDto>> getPosts(){
        return ResponseEntity.ok(this.postService.getPosts());
    }
    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<PostDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(this.postService.getById(id));
    }
    @GetMapping("hide/{postId}")
    public void hidePost(@PathVariable Integer postId){
        this.postService.hidePost(postId);
    }
    @GetMapping("show/{postId}")
    public void showPost(@PathVariable Integer postId){
        this.postService.showPost(postId);
    }
    @PutMapping("/save")
    public ResponseEntity<Boolean> save(@RequestBody PostDto post){
        return ResponseEntity.ok(this.postService.save(post));

    }
    @DeleteMapping("delete-by-id/{id}")
    public boolean deleteById(@PathVariable Integer id){
        return this.postService.deleteById(id);
    }
    @PutMapping("add-view/{postId}")
    public boolean addView(@PathVariable Integer postId){
        this.postService.addView(postId);
        return true;
    }


}
