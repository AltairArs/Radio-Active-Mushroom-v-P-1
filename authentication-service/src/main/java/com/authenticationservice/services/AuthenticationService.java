package com.authenticationservice.services;

import com.authenticationservice.domain.dto.requests.UserAuthenticateRequest;
import com.authenticationservice.domain.dto.requests.UserRegisterRequest;
import com.authenticationservice.domain.dto.responses.JwtAuthenticationResponse;
import com.authenticationservice.domain.models.entities.UserEntity;

public interface AuthenticationService {
    public abstract JwtAuthenticationResponse register(UserRegisterRequest request);
    public abstract JwtAuthenticationResponse authenticate(UserAuthenticateRequest request);
    public abstract JwtAuthenticationResponse refreshToken(String refreshToken);
    public abstract void logout(UserEntity user);
}
