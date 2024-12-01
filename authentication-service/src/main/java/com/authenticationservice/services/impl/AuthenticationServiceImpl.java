package com.authenticationservice.services.impl;

import com.authenticationservice.domain.dto.requests.UserAuthenticateRequest;
import com.authenticationservice.domain.dto.requests.UserRegisterRequest;
import com.authenticationservice.domain.dto.responses.JwtAuthenticationResponse;
import com.authenticationservice.domain.enums.UserRoleEnum;
import com.authenticationservice.domain.models.entities.UserEntity;
import com.authenticationservice.domain.models.redis.JwtTokenRedisHash;
import com.authenticationservice.exceptions.EntityAlreadyExistsException;
import com.authenticationservice.exceptions.EntityNotFoundException;
import com.authenticationservice.exceptions.InvalidDataException;
import com.authenticationservice.repo.entity.UserRepository;
import com.authenticationservice.repo.redis.JwtTokenRepository;
import com.authenticationservice.services.AuthenticationService;
import com.authenticationservice.services.JwtService;
import com.authenticationservice.services.PasswordEncoderService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoderService passwordEncoderService;
    private final JwtService jwtService;
    private final JwtTokenRepository jwtTokenRepository;

    @Override
    public JwtAuthenticationResponse register(UserRegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail()) || userRepository.existsByNickname(request.getNickname())) {
            throw new EntityAlreadyExistsException("User with this data already exists");
        }
        UserEntity userEntity = UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoderService.encode(request.getPassword()))
                .nickname(request.getNickname())
                .name(request.getName())
                .surname(request.getSurname())
                .role(userRepository.count() == 0 ? UserRoleEnum.ADMIN : UserRoleEnum.USER)
                .build();
        userRepository.save(userEntity);
        return jwtService.generateTokenResponse(userEntity);
    }

    @Override
    public JwtAuthenticationResponse authenticate(UserAuthenticateRequest request) {
        if (request.getEmail() != null){
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            UserEntity userEntity = userRepository.findByEmail(request.getEmail()).orElseThrow(
                    () -> new EntityNotFoundException("User with this data does not exist")
            );
            userEntity.setLastLogin(LocalDateTime.now());
            userRepository.save(userEntity);
            return jwtService.generateTokenResponse(userEntity);
        } else {
            UserEntity userEntity = userRepository.findByNickname(request.getNickname()).orElseThrow(
                    () -> new EntityNotFoundException("User with this data does not found")
            );
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userEntity.getEmail(), request.getPassword()));
            userEntity.setLastLogin(LocalDateTime.now());
            userRepository.save(userEntity);
            return jwtService.generateTokenResponse(userEntity);
        }
    }

    @Override
    public JwtAuthenticationResponse refreshToken(String refreshToken) {
        JwtTokenRedisHash jwtTokenRedisHash = jwtTokenRepository.getByToken(refreshToken).orElseThrow(
                () -> new InvalidDataException("Token is invalid or expired")
        );
        if (!jwtTokenRedisHash.getTokenType().equals("REFRESH")) {
            throw new InvalidDataException("Invalid token type, expected REFRESH, found: " + jwtTokenRedisHash.getTokenType());
        }
        Long id = Long.parseLong(jwtService.extractFromToken(jwtTokenRedisHash.getToken(), "id"));
        UserEntity userEntity = userRepository.findById(id).orElseThrow(
                () -> new InvalidDataException("Token is invalid or expired")
        );
        logout(userEntity);
        return jwtService.generateTokenResponse(userEntity);
    }

    @Override
    public void logout(UserEntity user) {
        for (JwtTokenRedisHash tokenRedisHash : jwtTokenRepository.findAll()){
            if (tokenRedisHash.getUserId().equals(user.getId()))
                jwtTokenRepository.delete(tokenRedisHash);
        }
    }
}
