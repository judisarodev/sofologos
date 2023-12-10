package com.judisarodev.sofologos.controller;

import com.judisarodev.sofologos.service.FollowerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/follower")
public class FollowerRestController {
    private final FollowerService followerService;
    public FollowerRestController(FollowerService followerService){
        this.followerService = followerService;
    }
    @PutMapping("/add/{email}")
    public void addFollower(@PathVariable String email){
        this.followerService.addFollower(email);
    }
}
