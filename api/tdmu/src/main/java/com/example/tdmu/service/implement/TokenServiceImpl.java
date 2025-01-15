package com.example.tdmu.service.implement;

import com.example.tdmu.service.KeyService;
import com.example.tdmu.service.TokenService;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class TokenServiceImpl implements TokenService {

    private final KeyService keyService;

    @Value("${jwt.k-id}")
    private String k_id;

    @Override
    public String generateAccessToken(String email, long expirationMillis) {
        return generateToken(email, expirationMillis, keyService.getAccessTokenSecretKey());
    }

    @Override
    public String generateRefreshToken(String email, long expirationMillis) {
        return generateToken(email, expirationMillis, keyService.getRefreshTokenSecretKey());
    }

    @Override
    public String getUsernameFromToken(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(keyService.getAccessTokenSecretKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch (JwtException e) {
            throw new RuntimeException("Invalid token", e);
        }
    }

    @Override
    public boolean isValidAccessToken(String token) {
        return isValidToken(token, keyService.getAccessTokenSecretKey());
    }

    @Override
    public boolean isValidRefreshToken(String token) {
        return isValidToken(token, keyService.getRefreshTokenSecretKey());
    }

    private String generateToken(String email, long expirationMillis, SecretKey secretKey) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationMillis);

        return Jwts.builder()
                .setHeader(Map.of("k-id",k_id))
                .setSubject(email)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }

    private boolean isValidToken(String token, SecretKey secretKey) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

}
