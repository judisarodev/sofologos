package com.judisarodev.sofologos.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_types")
public class UserType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_type_id")
    private Integer userTypeId;
    @Column(nullable = false, length = 30)
    private String name;

    public Integer getUserTypeId() {
        return userTypeId;
    }

    public void setUserTypeId(Integer userTypeId) {
        this.userTypeId = userTypeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
