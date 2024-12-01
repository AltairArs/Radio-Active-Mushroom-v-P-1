package com.authenticationservice.domain.dto.requests;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAuthenticateRequest {
    private String email;
    private String password;
    private String nickname;
}
