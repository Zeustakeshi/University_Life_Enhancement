package com.example.tdmu.controller;

import com.example.tdmu.dto.response.ApiResponse;
import com.example.tdmu.dto.request.AuthenticationRequest;
import com.example.tdmu.dto.request.UserRequest;
import com.example.tdmu.dto.response.AuthenticationResponse;
import com.example.tdmu.dto.response.UserResponse;
import com.example.tdmu.service.*;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthController {

    private final UserService userService;
    private final Oauth2Service oauth2Service;
    private final EmailVerificationService emailVerificationService;
    private final AuthenticationService authenticationService;

    @GetMapping("/verify")
    public ResponseEntity<String> verifyEmail(@RequestParam(value = "token", required = true) String token) {
        if (token == null || token.isEmpty()) {
            return ResponseEntity.badRequest().body("Token is missing or invalid");
        }

        String message = emailVerificationService.verifyEmail(token);
        return ResponseEntity.ok(message);
    }

    @PostMapping("/register")
    public ApiResponse<?> register(@RequestBody @Valid UserRequest request) throws MessagingException {
        try {
            UserResponse userResponse = userService.createUser(request);
            log.info("User created successfully: {}", userResponse);

            return ApiResponse.success(userResponse);
        } catch (MessagingException e) {
            log.error("Error occurred while sending verification email", e);
            return ApiResponse.error("Error sending verification email");
        } catch (Exception e) {
            log.error("Unexpected error occurred", e);
            return ApiResponse.error("Unexpected error occurred");
        }
    }

    @PostMapping("/login")
    public ApiResponse<AuthenticationResponse> authenticate(
            @RequestBody @Valid AuthenticationRequest request)
    {
        try {
            return ApiResponse.success(authenticationService.login(request));
        }
        catch (Exception e){
            log.error("Unexpected error occurred", e);
            return ApiResponse.error("Unexpected error occurred");
        }
    }

    @GetMapping("/authorize/google")
    public ApiResponse<?> getGoogleAuthLink() {
        return ApiResponse.success(oauth2Service.getGoogleAuthLink());
    }

    @GetMapping("/oauth2/userinfo")
    public ApiResponse<?> getUserInfo(@RequestParam String accessToken) {
        return ApiResponse.success(oauth2Service.getUserInfo(accessToken));
    }

    @GetMapping("/oauth2/callback")
    public ApiResponse<?> handleCallback(@RequestParam String code) {
        return ApiResponse.success(oauth2Service.handleCallback(code));
    }
}
