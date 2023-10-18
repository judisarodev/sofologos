package com.judisarodev.sofologos.request;

public class PostItem {
    private String title;
    private String category;
    private String summary;
    private String content;
    private Integer likes;
    private Integer views;

    public PostItem(String title, String category,  String summary, String content, Integer likes, Integer views) {
        this.title = title;
        this.category = category;
        this.summary = summary;
        this.content = content;
        this.likes = likes;
        this.views = views;
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
}
