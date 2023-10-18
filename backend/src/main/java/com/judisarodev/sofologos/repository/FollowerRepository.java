package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.Follower;
import org.springframework.data.repository.ListCrudRepository;

public interface FollowerRepository extends ListCrudRepository<Follower, Integer> {
    Follower save(Follower follower);
    Follower findById(int followerId);
    void deleteById(int followerId);
}
