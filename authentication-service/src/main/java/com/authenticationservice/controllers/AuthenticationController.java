package com.authenticationservice.controllers;

import com.authenticationservice.domain.dto.requests.UserAuthenticateRequest;
import com.authenticationservice.domain.dto.requests.UserRegisterRequest;
import com.authenticationservice.domain.dto.responses.JwtAuthenticationResponse;
import com.authenticationservice.domain.models.entities.UserEntity;
import com.authenticationservice.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @QueryMapping
    public UserEntity currentUser(@AuthenticationPrincipal UserEntity user) {
        return user;
    }

    @MutationMapping
    public JwtAuthenticationResponse authenticate(@Argument final UserAuthenticateRequest input) {
        return authenticationService.authenticate(input);
    }

    @MutationMapping
    public JwtAuthenticationResponse register(@Argument final UserRegisterRequest input) {
        return authenticationService.register(input);
    }

    @MutationMapping
    public JwtAuthenticationResponse refreshToken(@Argument final String refreshToken) {
        return authenticationService.refreshToken(refreshToken);
    }

    @MutationMapping
    public void logout(@AuthenticationPrincipal final UserEntity user) {
        authenticationService.logout(user);
        SecurityContextHolder.clearContext();
    }
}
