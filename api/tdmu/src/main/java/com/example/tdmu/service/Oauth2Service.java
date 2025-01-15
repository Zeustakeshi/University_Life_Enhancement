package com.example.tdmu.service;

import com.example.tdmu.dto.response.GoogleAuthUrlResponse;

import java.util.Map;

public interface Oauth2Service {

    GoogleAuthUrlResponse getGoogleAuthLink();
    Map<String, Object> handleCallback(String code);

}
