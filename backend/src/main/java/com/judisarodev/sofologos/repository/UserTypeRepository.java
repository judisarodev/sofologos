package com.judisarodev.sofologos.repository;

import com.judisarodev.sofologos.model.UserType;
import org.springframework.data.repository.ListCrudRepository;

public interface UserTypeRepository extends ListCrudRepository<UserType, Integer> {
    UserType save(UserType userType);
    UserType findById(int userTypeId);
    void deleteById(int userTypeId);
}
