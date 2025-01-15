package com.example.tdmu.service;

import com.example.tdmu.entity.User;
import com.example.tdmu.exceptioin.AppException;
import com.example.tdmu.exceptioin.ErrorCode;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("${jwt.signerKey}")
    private String SECRET_KEY;


    public String extractUserName(String token){
        return extractClaims(token, Claims::getSubject);
    }

    public <T> T extractClaims(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(User user){
        return generateToken(new HashMap<>(), user);
    }

    public boolean isTokenValid(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(Keys.hmacShaKeyFor(SECRET_KEY.getBytes()))
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private String generateToken(Map<String,Object> extraClaims,
                                 User user){
        try {
            return Jwts.builder()
                    .setHeaderParam("k-id", UUID.randomUUID().toString())
                    .setClaims(extraClaims)
                    .setSubject(user.getEmail())
                    .setIssuer("TDMU")
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(
                            Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                    ))
                    .setId(UUID.randomUUID().toString())
                    .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                    .compact();
        } catch (IllegalArgumentException e) {
            throw new AppException(ErrorCode.INVALID_SECRET_KEY);
        } catch (Exception e) {
            throw new AppException(ErrorCode.UNCATEGORIZED_EXCEPTION);
        }
    }


}
