package com.example.tdmu.dto.response;

import com.example.tdmu.entity.Role;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserResponse {
    Integer userId;
    String username;
    String password;
    String email;
    Role role;
    Date createdAt;
    Boolean status;
    Date updatedAt;
}
