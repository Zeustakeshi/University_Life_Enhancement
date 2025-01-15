package com.example.tdmu.service;

import com.example.tdmu.entity.User;
import com.example.tdmu.entity.VerifiTokenEntity;
import com.example.tdmu.repository.UserRepository;
import com.example.tdmu.repository.VerificationTokenRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class EmailVerificationService {
    VerificationTokenRepository tokenRepository;
    UserRepository userRepository;
    public String verifyEmail(String token){
        VerifiTokenEntity verifiTokenEntity = tokenRepository.findByToken(token)
                .orElseThrow(() -> new IllegalArgumentException("Invalid token"));
        User user = verifiTokenEntity.getUser();
        if(user.getStatus()){
            return "Account already verified.";
        }

        if(verifiTokenEntity.getExpiryDate().isBefore(LocalDateTime.now())){
            return "Token expired.";
        }
        user.setStatus(true);
        userRepository.save(user);
        return "Email verified successfully.";
    }
}
