package com.judisarodev.sofologos.dto;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class PostDto {
    private Integer postId;
    private String title;
    private String category;
    private String summary;
    private String content;
    private Integer likes;
    private Integer views;
    private String username;
    private DateDto date;
    public PostDto(){}
    public PostDto(String title, String category, String summary, String content, Integer likes, Integer views, String username, DateDto date) {
        this.title = title;
        this.category = category;
        this.summary = summary;
        this.content = content;
        this.likes = likes;
        this.views = views;
        this.username = username;
        this.date = date;
    }
    public PostDto(Integer postId, String title, String category, String summary, String content, Integer likes, Integer views, String username, DateDto date) {
        this.postId = postId;
        this.title = title;
        this.category = category;
        this.summary = summary;
        this.content = content;
        this.likes = likes;
        this.views = views;
        this.username = username;
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public DateDto getDate() {
        return date;
    }

    public void setDate(DateDto date) {
        this.date = date;
    }
}
