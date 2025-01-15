package com.example.tdmu;

import com.example.tdmu.properties.AccessTokenProperties;
import com.example.tdmu.properties.RefreshTokenProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableConfigurationProperties({AccessTokenProperties.class, RefreshTokenProperties.class})
public class TdmuApplication {

	public static void main(String[] args) {
		SpringApplication.run(TdmuApplication.class, args);
	}

}
