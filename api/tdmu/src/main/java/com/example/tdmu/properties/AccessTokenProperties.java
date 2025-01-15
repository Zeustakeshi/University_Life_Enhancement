package com.example.tdmu.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.jwt.access-token")
public record AccessTokenProperties (String secret_key, Long expiration){
}
