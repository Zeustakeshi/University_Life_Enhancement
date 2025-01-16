package com.example.tdmu.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {
    private String version;
    private String code;
    private T data;
    private Object error_message;
    private LocalDateTime timestamp;


    public static <T> ApiResponse<T> success(T data) {
        return ApiResponse.<T>builder()
                .version("v1")
                .code("200")
                .data(data)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public static <T> ApiResponse<T> success(T data,String code) {
        return ApiResponse.<T>builder()
                .version("v1")
                .code(code)
                .data(data)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public static <T> ApiResponse<T> error(Object errors) {
        return ApiResponse.<T>builder()
                .version("v1")
                .code("404")
                .error_message(errors)
                .timestamp(LocalDateTime.now())
                .build();
    }

    public static <T> ApiResponse<T> error(Object errors,String code) {
        return ApiResponse.<T>builder()
                .version("v1")
                .code(code)
                .error_message(errors)
                .timestamp(LocalDateTime.now())
                .build();
    }
}