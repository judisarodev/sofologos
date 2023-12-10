package com.judisarodev.sofologos.service;

import com.judisarodev.sofologos.dto.UserDto;
import com.judisarodev.sofologos.mapper.UserMapper;
import com.judisarodev.sofologos.model.User;
import com.judisarodev.sofologos.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserSecurityService implements UserDetailsService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserSecurityService(UserRepository userRepository, UserMapper userMapper){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDto user = userMapper.userToUseDto(
                userRepository.findByUsername(username)
                        .orElseThrow(() -> new UsernameNotFoundException("Invalid")));

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole())
                .build();
    }
}
