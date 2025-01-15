package com.example.tdmu.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GoogleAuthUrlResponse {

    private String authUrl;

}
