package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.config.JwtUtil;
import com.judisarodev.sofologos.pojos.LoginRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    public LoginService(JwtUtil jwtUtil, AuthenticationManager authenticationManager){
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }
    public String authenticate(LoginRequest loginRequest){
        UsernamePasswordAuthenticationToken login =
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());
        Authentication authentication = this.authenticationManager.authenticate(login);

        String jwt = this.jwtUtil.create(loginRequest.getUsername());

        return jwt;
    }
}
