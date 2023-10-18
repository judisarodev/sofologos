package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends ListCrudRepository<Post, Integer> {
    //missing get by category.
    List<Post> findAll();
    Optional<Post> findById(Integer postId);
    Post save(Post user);
    void deleteById(Integer postId);
}
