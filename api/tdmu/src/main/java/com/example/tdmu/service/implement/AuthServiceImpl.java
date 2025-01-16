package com.example.tdmu.service.implement;

import com.example.tdmu.dto.response.ApiResponse;
import com.example.tdmu.dto.response.AuthenticationResponse;
import com.example.tdmu.dto.response.UserResponse;
import com.example.tdmu.service.AuthService;
import com.example.tdmu.service.UserService;
import com.nimbusds.openid.connect.sdk.LogoutRequest;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserService userService;


    @Override
    public AuthenticationResponse register(Map<String, String> request) {
        return null;
    }

    @Override
    public AuthenticationResponse authenticate(String username, String password) {
        return null;
    }

    @Override
    public void logout(LogoutRequest request) {

    }

}
