package com.authenticationservice.domain.dto.requests;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRegisterRequest {
    private String email;
    private String password;
    private String nickname;
    private String name;
    private String surname;
}
