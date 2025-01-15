package com.example.tdmu.service.implement;

import com.example.tdmu.dto.request.ApiResponse;
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

        try {
            UserResponse userResponse = userService.createUser(request);
            log.info("User created successfully: {}", userResponse);

            ApiResponse<UserResponse> apiResponse = ApiResponse.<UserResponse>builder()
                    .result(userResponse)
                    .build();

            return ResponseEntity.ok(apiResponse);
        } catch (MessagingException e) {
            log.error("Error occurred while sending verification email", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    ApiResponse.<UserResponse>builder()
                            .message("Error sending verification email")
                            .build());
        } catch (Exception e) {
            log.error("Unexpected error occurred", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    ApiResponse.<UserResponse>builder()
                            .message("Unexpected error occurred")
                            .build());
        }
    }




    @Override
    public AuthenticationResponse authenticate(String username, String password) {
        return null;
    }

    @Override
    public void logout(LogoutRequest request) {

    }

}
