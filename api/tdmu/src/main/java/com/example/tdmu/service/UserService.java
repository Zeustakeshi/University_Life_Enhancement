package com.example.tdmu.service;

import com.example.tdmu.dto.request.UserRequest;
import com.example.tdmu.dto.response.UserResponse;
import com.example.tdmu.entity.Role;
import com.example.tdmu.entity.User;
import com.example.tdmu.entity.VerifiTokenEntity;
import com.example.tdmu.mapper.UserMapper;
import com.example.tdmu.repository.RoleRepository;
import com.example.tdmu.repository.UserRepository;
import com.example.tdmu.repository.VerificationTokenRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final VerificationTokenRepository tokenRepository;
    private final AuthenticationService authService;
    public UserResponse createUser(UserRequest request) throws MessagingException {

        Role role = roleRepository.findByName("guest")
                .orElseGet(()-> {
                    Role newRole = new Role();
                    newRole.setName("guest");
                    return roleRepository.save(newRole);
                });
        User user = userMapper.toUser(request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(role);
        user = userRepository.save(user);
        String token = UUID.randomUUID().toString();
        VerifiTokenEntity verificationToken = new VerifiTokenEntity(user, token);
        tokenRepository.save(verificationToken);

        // Gửi email xác minh
        authService.sendVerificationEmail(user, token);
        return userMapper.userResponse(user);
    }

    public User getUser(String email){
        return userRepository.findByEmail(email).orElseThrow();
    }

}
