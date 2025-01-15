package com.example.tdmu.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

public class OAuth2ClientConfig {

    @Bean
    public SecurityFilterChain oauth2ClientSecurityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> oauth2
                        .authorizationEndpoint(authEndpoint -> authEndpoint
                                .baseUri("/api/auth/oauth2/authorize") // Endpoint lấy link Google
                        )
                        .redirectionEndpoint(redirectEndpoint -> redirectEndpoint
                                .baseUri("/api/auth/oauth2/callback") // Callback từ Google
                        )
                );

        return http.build();
    }

}
