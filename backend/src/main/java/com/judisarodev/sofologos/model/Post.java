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
    private Integer views;
    @Column(nullable = false, columnDefinition = "DATE")
    private Calendar date;
    @Column(name = "user_id")
    private String userId = "1";
    @Column(name = "is_active", columnDefinition = "TINYINT")
    private Boolean isActive;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    private Category category;

    public Post() {

    }
    public Post(Integer postId,String title, String summary, String content, Integer views, Category category, Calendar date) {
        this.postId = postId;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.views = views;
        this.category = category;
        this.date = date;
        this.isActive = true;
    }

    public Post(String title, String summary, String content, Integer views, Category category, Calendar date) {
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.views = views;
        this.category = category;
        this.date = date;
        this.isActive = true;
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

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
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

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String toString(){
        return(title + " " + summary + " " + category);
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}
