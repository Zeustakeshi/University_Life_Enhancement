package com.example.tdmu.service.implement;

import com.example.tdmu.dto.response.GoogleAuthUrlResponse;
import com.example.tdmu.service.Oauth2Service;
import com.example.tdmu.service.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class Oauth2ServiceImpl implements Oauth2Service {

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.redirect-uri}")
    private String redirectUri;

    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;

    @Value("${spring.security.oauth2.client.provider.google.token-uri}")
    private String tokenEndpoint;

    @Value("${spring.security.oauth2.client.provider.google.user-info-uri}")
    private String userInfoEndpoint;

    private final TokenService tokenService;



    @Override
    public Map<String, Object> handleCallback(String code) {
        // Tạo request body để đổi mã code lấy token
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("code", code);
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);
        body.add("redirect_uri", redirectUri);
        body.add("grant_type", "authorization_code");

        // Tạo RestTemplate để gửi yêu cầu
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<MultiValueMap<String, String>> tokenRequest = new HttpEntity<>(body, headers);

        try {
            // Gửi yêu cầu đổi mã code lấy access token
            ResponseEntity<Map> tokenResponse = restTemplate.postForEntity(tokenEndpoint, tokenRequest, Map.class);

            if (tokenResponse.getStatusCode() != HttpStatus.OK || tokenResponse.getBody() == null) {
                throw new RuntimeException("Failed to fetch token");
            }

            Map<String, Object> tokenResponseBody = tokenResponse.getBody();
            String accessToken = (String) tokenResponseBody.get("access_token");

            // Sử dụng access token để gọi Google UserInfo API
            HttpHeaders userInfoHeaders = new HttpHeaders();
            userInfoHeaders.setBearerAuth(accessToken);
            HttpEntity<?> userInfoRequest = new HttpEntity<>(userInfoHeaders);

            ResponseEntity<Map> userInfoResponse = restTemplate.exchange(
                    userInfoEndpoint,
                    HttpMethod.GET,
                    userInfoRequest,
                    Map.class
            );

            if (userInfoResponse.getStatusCode() != HttpStatus.OK || userInfoResponse.getBody() == null) {
                throw new RuntimeException("Failed to fetch user info");
            }

            Map<String, Object> userInfo = userInfoResponse.getBody();

            // Lấy email, name, và avatar từ userInfo
            String email = (String) userInfo.get("email");
            String name = (String) userInfo.get("name");
            String avatar = (String) userInfo.get("picture");

            // Tạo JWT từ email
            String jwtToken = tokenService.generateAccessToken(email, 1000 * 60 * 30); // Token 30 phút

            // Trả về thông tin người dùng cùng với JWT và avatar
            Map<String, Object> response = new HashMap<>();
            response.put("email", email);
            response.put("name", name);
            response.put("avatar", avatar);
            response.put("jwtToken", jwtToken);
            response.put("googleResponse", tokenResponseBody);

            return response;

        } catch (Exception e) {
            throw new RuntimeException("Error during OAuth2 callback handling: " + e.getMessage(), e);
        }
    }

    @Override
    public Map<String, Object> getUserInfo(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Map> response = restTemplate.exchange(
                "https://openidconnect.googleapis.com/v1/userinfo",
                HttpMethod.GET,
                entity,
                Map.class
        );

        return response.getBody();
    }

    @Override
    public GoogleAuthUrlResponse getGoogleAuthLink() {
        String googleAuthUrl = "https://accounts.google.com/o/oauth2/auth?" +
                "client_id=" + clientId +
                "&redirect_uri=" + clientId +
                "&response_type=code" +
                "&scope=email profile";

        return GoogleAuthUrlResponse.builder()
                .authUrl(googleAuthUrl)
                .build();
    }

}
