package com.example.tdmu.service;

import javax.crypto.SecretKey;

public interface KeyService {

    SecretKey getAccessTokenSecretKey();
    SecretKey getRefreshTokenSecretKey();

}
