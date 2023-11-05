package com.judisarodev.sofologos.model;
import jakarta.persistence.*;
import java.util.Calendar;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Integer postId;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String title;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String summary;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    @Column(nullable = false)
    private Integer likes;
    @Column(nullable = false)
    private Integer views;
    @Column(nullable = false, columnDefinition = "DATE")
    private Calendar date;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Category category;

    public Post() {

    }
    public Post(String title, String summary, String content, Integer likes, Integer views, User user, Category category, Calendar date) {
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.likes = likes;
        this.views = views;
        this.user = user;
        this.category = category;
        this.date = date;
    }
    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Calendar getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        this.date = date;
    }
}
