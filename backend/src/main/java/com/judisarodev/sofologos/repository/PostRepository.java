package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
    Post save(Post user);
    Post findById(int postId);
    void deleteById(int postId);

}
