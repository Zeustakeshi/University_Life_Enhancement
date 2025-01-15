package com.example.tdmu.controller;

import com.example.tdmu.dto.request.ApiResponse;
import com.example.tdmu.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/oauth2/success")
    public Map<String, Object> getUserInfo(OAuth2AuthenticationToken authentication) {
        OidcUser oidcUser = (OidcUser) authentication.getPrincipal();
        return Map.of(
                "name", oidcUser.getFullName(),
                "email", oidcUser.getEmail(),
                "token", oidcUser.getIdToken().getTokenValue()
        );
    }

    @GetMapping("/me")
    public ResponseEntity<?> getUserProfile(Authentication authentication){
        return ResponseEntity.ok(userService.getUser(authentication.getName()));
    }

}
