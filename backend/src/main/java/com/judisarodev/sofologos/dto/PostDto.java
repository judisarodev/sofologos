package com.judisarodev.sofologos.dto;

public class PostDto {
    private Integer postId;
    private String title;
    private String category;
    private String summary;
    private String content;
    private Integer views;
    private String username;
    private DateDto date;
    private Boolean isActive;
    public PostDto(){}
    public PostDto(String title, String category, String summary, String content, Integer views, String username, DateDto date) {
        this.title = title;
        this.category = category;
        this.summary = summary;
        this.content = content;
        this.views = views;
        this.username = username;
        this.date = date;
        this.isActive = true;
    }
    public PostDto(Integer postId, String title, String category, String summary, String content, Integer views, String username, DateDto date, Boolean isActive) {
        this.postId = postId;
        this.title = title;
        this.category = category;
        this.summary = summary;
        this.content = content;
        this.views = views;
        this.username = username;
        this.date = date;
        this.isActive = isActive;
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

    public Boolean getIsActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}
