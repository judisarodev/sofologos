package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User save(User user);
    User findById(int userId);
    void deleteById(int userId);
}
