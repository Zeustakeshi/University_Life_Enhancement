package com.example.tdmu.configuration;

import com.example.tdmu.properties.AccessTokenProperties;
import com.example.tdmu.properties.RefreshTokenProperties;
import com.example.tdmu.service.KeyService;
import com.nimbusds.jose.jwk.source.ImmutableSecret;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;

@Configuration
@RequiredArgsConstructor
@EnableConfigurationProperties({AccessTokenProperties.class, RefreshTokenProperties.class})
public class JwtConfig {

    private final KeyService keyService;

    @Bean(name = "accessTokenDecoder")
    @Primary
    public JwtDecoder accessTokenDecoder() {
        return NimbusJwtDecoder.withSecretKey(keyService.getAccessTokenSecretKey()).build();
    }

    @Bean("accessTokenEncoder")
    public JwtEncoder accessTokenEncoder(){
        return new NimbusJwtEncoder(new ImmutableSecret<>(keyService.getAccessTokenSecretKey()));
    }

    @Bean("refreshTokenEncoder")

    public JwtEncoder refreshTokenEncoder(){
        return new NimbusJwtEncoder(new ImmutableSecret<>(keyService.getRefreshTokenSecretKey()));
    }

    @Bean(name = "refreshTokenDecoder")
    public JwtDecoder refreshTokenDecoder() {
        return NimbusJwtDecoder.withSecretKey(keyService.getRefreshTokenSecretKey()).build();
    }

}
