package com.judisarodev.sofologos.controller;
import com.judisarodev.sofologos.pojos.LoginRequest;
import com.judisarodev.sofologos.service.LoginService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginRestController {
    private final LoginService loginService;
    public LoginRestController(LoginService loginService){
        this.loginService = loginService;
    }
    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestBody LoginRequest loginRequest) {
        String jwt = loginService.authenticate(loginRequest);
        return ResponseEntity.ok(jwt);
    }

}
