package com.example.tdmu.service;

public interface TokenService {

    String generateAccessToken(String username, long expirationMillis);

    String generateRefreshToken(String username, long expirationMillis);

    String getUsernameFromToken(String token);

    boolean isValidAccessToken(String token);

    boolean isValidRefreshToken(String token);

}
