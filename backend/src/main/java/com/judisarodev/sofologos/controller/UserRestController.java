package com.judisarodev.sofologos.controller;

import com.judisarodev.sofologos.model.User;
import com.judisarodev.sofologos.pojos.LoginRequest;
import com.judisarodev.sofologos.service.UserService;
import jakarta.annotation.Generated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/login")
public class UserRestController {
    UserService userService;
    public UserRestController(UserService userService){
        this.userService = userService;
    }
    // this post request should have something like {"username": "value", "password": "value" }
    @PostMapping
    public Boolean login(@RequestBody LoginRequest loginRequest){
        return userService.login(loginRequest.getUsername(), loginRequest.getPassword());
    }

}
