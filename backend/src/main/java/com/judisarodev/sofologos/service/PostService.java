package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.dto.DateDto;
import com.judisarodev.sofologos.mapper.PostMapper;
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
    private final PostMapper postMapper;
    public PostService(PostRepository postRepository, PostMapper postMapper){
        this.postRepository = postRepository;
        this.postMapper = postMapper;
    }
    public ArrayList<PostDto> getAll() {
        ArrayList<PostDto> postsDto = new ArrayList<>();
        for(Post p: postRepository.findAll()){
            postsDto.add(this.postMapper.toPostDto(p));
        }
        return postsDto;
    }
    public PostDto getById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        return this.postMapper.toPostDto(post);
    }
    public boolean save(PostDto givenPost) {
        Post post = postRepository.save(this.postMapper.toPost(givenPost));
        if(postRepository.findById(post.getPostId()).orElse(null) == null){
            return false;
        }else{
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
}
