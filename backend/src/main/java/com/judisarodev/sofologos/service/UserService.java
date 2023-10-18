package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.model.User;
import com.judisarodev.sofologos.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public Boolean login(String username, String password){
        User user = userRepository.findByUsernameAndPassword(username, password).orElse(null);
        if(user != null){
            return Boolean.TRUE;
        }else{
            return Boolean.FALSE;
        }
    }

}
