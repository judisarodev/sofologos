package com.judisarodev.sofologos.service;
import com.judisarodev.sofologos.mapper.PostMapper;
import com.judisarodev.sofologos.model.Post;
import com.judisarodev.sofologos.repository.PostRepository;
import com.judisarodev.sofologos.dto.PostDto;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper postMapper;
    public PostService(PostRepository postRepository, PostMapper postMapper){
        this.postRepository = postRepository;
        this.postMapper = postMapper;
    }
    public int getNumberOfPosts(){
        return postRepository.findAll().size();
    }
    public ArrayList<PostDto> getAll(int rows) {
        ArrayList<PostDto> postsDto = new ArrayList<>();
        int counter = 0;
        for(Post p: postRepository.findAll()) {
            if (counter < rows) {
                counter++;
                postsDto.add(this.postMapper.toPostDto(p));
            }else{
                break;
            }
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
    @Transactional
    public void addView(Integer postId){
        this.postRepository.addView(postId);
        System.out.println("Se ha sumado una vista al post " + postId);
    }
}
