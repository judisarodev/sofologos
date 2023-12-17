package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Post;
import org.springframework.data.jpa.repository.Modifying;
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
    @Modifying
    @Query("UPDATE Post SET views = views + 1 WHERE postId = :postId")
    void addView(Integer postId);

    @Modifying
    @Query("UPDATE Post SET isActive = false WHERE postId = :postId")
    void hidePost(Integer postId);

    @Modifying
    @Query("UPDATE Post SET isActive = true WHERE postId = :postId")
    void showPost(Integer postId);
}
