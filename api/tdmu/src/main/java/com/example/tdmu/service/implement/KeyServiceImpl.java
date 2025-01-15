package com.example.tdmu.service.implement;

import com.example.tdmu.properties.AccessTokenProperties;
import com.example.tdmu.properties.RefreshTokenProperties;
import com.example.tdmu.service.KeyService;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

@Service
@RequiredArgsConstructor
public class KeyServiceImpl implements KeyService {

    private final AccessTokenProperties accessTokenProperties;

    private final RefreshTokenProperties refreshTokenProperties;


    public SecretKey getAccessTokenSecretKey() {
        return Keys.hmacShaKeyFor(accessTokenProperties.secret_key().getBytes());
    }

    public SecretKey getRefreshTokenSecretKey() {
        return Keys.hmacShaKeyFor(refreshTokenProperties.secret_key().getBytes());
    }

}
