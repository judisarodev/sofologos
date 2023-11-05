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
            DateDto date = new DateDto(
                    Integer.toString(p.getDate().get(Calendar.DATE)),
                    Integer.toString(p.getDate().get(Calendar.MONTH)),
                    Integer.toString(p.getDate().get(Calendar.YEAR)));
            postsDto.add(this.postMapper.toPostDto(p));
        }
        return postsDto;
    }
    public PostDto getById(Integer postId){
        Post post = this.postRepository.findById(postId).orElse(null);
        DateDto date = new DateDto(
                Integer.toString(post.getDate().get(Calendar.DATE)),
                Integer.toString(post.getDate().get(Calendar.MONTH)),
                Integer.toString(post.getDate().get(Calendar.YEAR)));
        return this.postMapper.toPostDto(post);
    }
    public Boolean save(PostDto givenPost) {
        Calendar date = new GregorianCalendar(
                Integer.parseInt(givenPost.getDate().getYear()),
                Integer.parseInt(givenPost.getDate().getMonth()),
                Integer.parseInt(givenPost.getDate().getDate()));

        Post post = postRepository.save(this.postMapper.toPost(givenPost));
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
