package com.judisarodev.sofologos.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.judisarodev.sofologos.model.Post;
import com.judisarodev.sofologos.repository.PostRepository;
import com.judisarodev.sofologos.request.PostItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final CategoryService categoryService;
    public PostService(PostRepository postRepository, CategoryService categoryService){
        this.postRepository = postRepository;
        this.categoryService = categoryService;
    }

    public Post findById(Integer postId){
        return this.postRepository.findById(postId).orElse(null);
    }
    public Post save(Post post){
        return this.postRepository.save(post);
    }
    public void deleteById(Integer postId){
        this.postRepository.deleteById(postId);
    }

    public ArrayList<PostItem> getAllPosts() {
        ArrayList<PostItem> postItems = new ArrayList<>();

        for(Post p: postRepository.findAll()){
            String category = categoryService.findById(p.getCategory().getCategoryId()).toString();
            postItems.add(new PostItem(p.getTitle(), category, p.getSummary(), p.getContent(), p.getLikes(), p.getViews()));
        }
        return postItems;
    }
}
