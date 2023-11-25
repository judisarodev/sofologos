package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.mapper.FollowerMapper;
import com.judisarodev.sofologos.model.Follower;
import com.judisarodev.sofologos.repository.FollowerRepository;
import org.springframework.stereotype.Service;

@Service
public class FollowerService {
    private final FollowerRepository followerRepository;
    private final FollowerMapper followerMapper;
    public FollowerService(FollowerRepository followerRepository, FollowerMapper followerMapper){
        this.followerRepository = followerRepository;
        this.followerMapper = followerMapper;
    }

    public void addFollower(String email){
        this.followerRepository.save(this.followerMapper.toFollower(email));
    }
}
