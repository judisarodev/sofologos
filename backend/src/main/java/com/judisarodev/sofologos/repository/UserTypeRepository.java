package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTypeRepository extends JpaRepository<UserType, Integer> {
    UserType save(UserType userType);
    UserType findById(int userTypeId);
    void deleteById(int userTypeId);
}
