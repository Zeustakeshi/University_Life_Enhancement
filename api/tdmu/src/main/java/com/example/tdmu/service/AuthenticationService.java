package com.example.tdmu.service;
import com.example.tdmu.dto.request.AuthenticationRequest;
import com.example.tdmu.dto.request.IntrospectRequest;
import com.example.tdmu.dto.response.AuthenticationResponse;
import com.example.tdmu.dto.response.IntrospectResponse;
import com.example.tdmu.entity.User;
import com.example.tdmu.exceptioin.AppException;
import com.example.tdmu.exceptioin.ErrorCode;
import com.example.tdmu.repository.InvalidatedTokenRepository;
import com.example.tdmu.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.mail.MessagingException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import io.jsonwebtoken.Jwts;

import javax.crypto.spec.SecretKeySpec;


@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {

    @NonFinal
    @Value("${notification.service.url}")
    String notificationServiceUrl;

    @NonFinal
    @Value("${jwt.signerKey}")
    protected String SIGNER_KEY;

    private final UserRepository userRepository;

    RestTemplate restTemplate;
    @NonFinal
    @Value("${jwt.refreshable-duration}")
    protected long REFRESHABLE_DURATION;

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    private final InvalidatedTokenRepository invalidatedTokenRepository;
    public AuthenticationResponse authenticate(AuthenticationRequest request) throws KeyLengthException {
        var user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

        boolean authenticate = passwordEncoder.matches(request.getPassword(), user.getPassword());
        if (!authenticate) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }

        var token = generateToken(user.getUserId());
        return AuthenticationResponse.builder()
                .accessToken(token)
                .authenticated(true)
                .role(user.getRole())
                .userId(user.getUserId())
                .build();
    }

    public AuthenticationResponse login(AuthenticationRequest request){
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            var user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTED));

            var jwtToken = jwtService.generateToken(user);

            return AuthenticationResponse
                    .builder()
                    .accessToken(jwtToken)
                    .authenticated(true)
                    .role(user.getRole())
                    .userId(user.getUserId())
                    .build();

        } catch (AuthenticationException e) {
            throw new AppException(ErrorCode.UNAUTHENTICATED);
        }
    }

    private String generateToken(Integer userId) throws KeyLengthException {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS256);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(userId.toString())  // Sử dụng userId làm subject
                .issuer("TDMU")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                ))
                .jwtID(UUID.randomUUID().toString())
                .claim("customClaim", "custom")
                .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("cannot create token", e);
            throw new RuntimeException(e);
        }
    }


    public IntrospectResponse introspectToken(IntrospectRequest request) throws JOSEException, ParseException {
        var token = request.getToken();
        boolean isValid = true;
        Integer userId = null;

        try{
            SignedJWT signedJWT = verifyToken(token,false);
            userId = Integer.parseInt(signedJWT.getJWTClaimsSet().getSubject());
            System.out.println("Extracted UserID from Token: " + userId);
        } catch (AppException e){
            isValid = false;
        }
        return IntrospectResponse.builder()
                .valid(isValid)
                .userId(userId)
                .build();
    }

    private SignedJWT verifyToken(String token, boolean isRefresh) throws JOSEException, ParseException {

        JWSVerifier jwsVerifier = new MACVerifier(SIGNER_KEY.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);
        Date expiryTime = (isRefresh)
                ? new Date(signedJWT.getJWTClaimsSet().getIssueTime()
                .toInstant().plus(REFRESHABLE_DURATION, ChronoUnit.SECONDS).toEpochMilli())
                : signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(jwsVerifier);
        if(!(verified && expiryTime.after(new Date()))) throw new AppException(ErrorCode.UNAUTHENTICATED);
        if (invalidatedTokenRepository.existsById(signedJWT.getJWTClaimsSet().getJWTID()))
            throw new AppException(ErrorCode.UNAUTHENTICATED);

        return signedJWT;
    }

    void sendVerificationEmail(User user, String token) throws MessagingException {
        if (user == null || user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new IllegalArgumentException("User or email cannot be null or empty");
        }

        // URL xác minh email
        String verificationUrl = UriComponentsBuilder.fromHttpUrl("https://start.spring.io/")
                .path(token)
                .toUriString();

        // Tạo body của email
        Map<String, String> emailRequest = new HashMap<>();
        emailRequest.put("to", user.getEmail());
        emailRequest.put("subject", "Verify your email address");
        emailRequest.put("body", "Please click the following link to verify your email: " + verificationUrl);

        try {
            // Gửi request tới NotificationService
            ResponseEntity<Void> response = restTemplate.postForEntity(notificationServiceUrl + "/send-email", emailRequest, Void.class);
            if (!response.getStatusCode().is2xxSuccessful()) {
                throw new MessagingException("Failed to send email: " + response.getStatusCode());
            }
        } catch (RestClientException e) {
            // Log lỗi và throw lại để xử lý bởi controller hoặc global exception handler
            log.error("Error occurred while sending verification email", e);
            throw new MessagingException("Failed to send email: " + e.getMessage(), e);
        }
    }

}
