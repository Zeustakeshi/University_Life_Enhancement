package com.example.tdmu.controller;

import com.example.tdmu.dto.request.ApiResponse;
import com.example.tdmu.dto.request.AuthenticationRequest;
import com.example.tdmu.dto.request.UserRequest;
import com.example.tdmu.dto.response.AuthenticationResponse;
import com.example.tdmu.dto.response.UserResponse;
import com.example.tdmu.entity.User;
import com.example.tdmu.service.AuthenticationService;
import com.example.tdmu.service.EmailVerificationService;
import com.example.tdmu.service.JwtService;
import com.example.tdmu.service.UserService;
import com.nimbusds.jose.KeyLengthException;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthController {
    private final UserService userService;
    private final JwtService jwtService;
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
    public ResponseEntity<ApiResponse<UserResponse>> register(@RequestBody @Valid UserRequest request) throws MessagingException {
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

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> authenticate(
            @RequestBody @Valid AuthenticationRequest request
    )
    {
        try {
            return ResponseEntity.ok(
                    ApiResponse.<AuthenticationResponse>builder()
                            .result(authenticationService.login(request))
                            .build()
            );
        }
        catch (Exception e){
            log.error("Unexpected error occurred", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    ApiResponse.<AuthenticationResponse>builder()
                            .message("Unexpected error occurred")
                            .build());
        }
    }

    @GetMapping("/google")
    public ResponseEntity<?> googleLogin(Authentication authentication) {
        OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) authentication;
        Map<String, Object> attributes = authToken.getPrincipal().getAttributes();



        String email = (String) attributes.get("email");

        User user = userService.getUser(email);
        if(user == null){
            return ResponseEntity.ok("Not found");
        }

        String jwtToken = jwtService.generateToken(user);

        return ResponseEntity.ok(jwtToken);
    }
}
