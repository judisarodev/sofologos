package com.judisarodev.sofologos.controller;
import com.judisarodev.sofologos.dto.PostDto;
import com.judisarodev.sofologos.service.PostService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:3000/")
public class PostRestController {
    private final PostService postService;
    public PostRestController(PostService postService){
        this.postService = postService;
    }
    @GetMapping("/get-all")
    public ResponseEntity<ArrayList<PostDto>> getAll(){
        return ResponseEntity.ok(this.postService.getAll());
    }
    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<PostDto> findById(@PathVariable Integer id){
        return ResponseEntity.ok(this.postService.getById(id));
    }
    // It needs something like:
    // {"title": "", "category": "", "summary": "", "content": "", "likes": 0, "views": 0, "username": "", "date":'1/1/1001'}
    @PostMapping("/create-post")
    public Boolean save(@RequestBody PostDto post){
        return this.postService.save(post);
    }
    @GetMapping("delete-by-id/{id}")
    public Boolean deleteById(@PathVariable Integer id){
        return this.postService.deleteById(id);
    }
}
