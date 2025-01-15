package com.example.tdmu.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.jwt.refresh-token")
public record RefreshTokenProperties(String secret_key, Long expiration) {
}

