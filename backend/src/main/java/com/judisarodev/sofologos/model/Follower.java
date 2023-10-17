package com.judisarodev.sofologos.model;

import jakarta.persistence.*;

@Entity
@Table(name = "followers")
public class Follower {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follower_id")
    private Integer followerId;
    @Column(length = 60, nullable = false)
    private String email;

    public Integer getFollowerId() {
        return followerId;
    }

    public void setFollowerId(Integer followerId) {
        this.followerId = followerId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
