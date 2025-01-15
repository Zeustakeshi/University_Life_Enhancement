package com.example.tdmu.dto.response;


import com.example.tdmu.entity.Role;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationResponse {
    private String accessToken;
    private String refreshToken;
    private boolean authenticated;
    private Role role;
    private Integer userId;
}
