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
    @GetMapping("/get-number-of-posts/")
    public int getNumberOfPosts(){
        return postService.getNumberOfPosts();
    }
    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<PostDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(this.postService.getById(id));
    }
    /*
    * {
    "title": "t",
    "category": "1",
    "summary": "s",
    "content": "c",
    "views": 0,
    "username": "1",
    "date":{
        "date":"01",
        "month": "12",
        "year": "2023"
    }
}
    * */
    @PutMapping("/create-post")
    public boolean save(@RequestBody PostDto post){
        return this.postService.save(post);
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
