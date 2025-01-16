package com.example.tdmu.mapper;

import com.example.tdmu.dto.request.UserRequest;
import com.example.tdmu.dto.response.UserResponse;
import com.example.tdmu.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserRequest request);

    UserResponse userResponse(User user);
}

