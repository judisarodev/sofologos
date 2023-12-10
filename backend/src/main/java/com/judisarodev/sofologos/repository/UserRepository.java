package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.User;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface UserRepository extends ListCrudRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
