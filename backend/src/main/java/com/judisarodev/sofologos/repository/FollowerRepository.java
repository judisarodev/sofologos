package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Follower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowerRepository extends JpaRepository<Follower, Integer> {
    Follower save(Follower follower);
    Follower findById(int followerId);
    void deleteById(int followerId);
}
