package com.example.tdmu.service;

import com.example.tdmu.dto.response.AuthenticationResponse;
import com.example.tdmu.entity.User;
import com.nimbusds.openid.connect.sdk.LogoutRequest;

import java.util.Map;

public interface AuthService {

    AuthenticationResponse register(Map<String, String> request);

    AuthenticationResponse authenticate(String username, String password);

    void logout(LogoutRequest request);

}
