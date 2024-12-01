package com.authenticationservice.services.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.authenticationservice.domain.dto.responses.JwtAuthenticationResponse;
import com.authenticationservice.domain.models.entities.UserEntity;
import com.authenticationservice.domain.models.redis.JwtTokenRedisHash;
import com.authenticationservice.repo.redis.JwtTokenRepository;
import com.authenticationservice.services.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class JwtServiceImpl implements JwtService {
    private final JwtTokenRepository jwtTokenRepository;

    @Value("${jwt.signing.key}")
    private String jwtSigningKey;

    @Value("${jwt.expiration.access}")
    private Long jwtAccessExpiration;

    @Value("${jwt.expiration.refresh}")
    private Long jwtRefreshExpiration;

    private String generateToken(UserDetails userDetails, long jwtExpiration, String tokenType){
        Map<String, Object> claims = new HashMap<>();
        Date createdAt = new Date();
        if (userDetails instanceof UserEntity customUserDetails) {
            claims.put("id", customUserDetails.getId());
            claims.put("tokenType", tokenType);
            claims.put("expires", createdAt.toInstant().plus(jwtExpiration, ChronoUnit.SECONDS));
        }
        return tokenise(claims);
    }

    private String tokenise(Map<String, Object> claims){
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtSigningKey);
            return JWT.create().withPayload(claims).sign(algorithm);
        } catch (JWTCreationException exception){
            exception.printStackTrace();
            return null;
        }
    }

    private Map<String, Claim> getPayload(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(jwtSigningKey);
            return JWT.require(algorithm).build().verify(token).getClaims();
        } catch (JWTVerificationException exception){
            exception.printStackTrace();
            return null;
        }
    }

    @Override
    public String extractFromToken(String jwtToken, String fieldName) {
        return getPayload(jwtToken).get(fieldName).asString();
    }

    @Override
    public String generateAccessToken(UserDetails userDetails) {
        return generateToken(userDetails, jwtAccessExpiration, "ACCESS");
    }

    @Override
    public String generateRefreshToken(UserDetails userDetails) {
        return generateToken(userDetails, jwtRefreshExpiration, "REFRESH");
    }

    @Override
    public JwtAuthenticationResponse generateTokenResponse(UserEntity userDetails) {
        String accessToken = generateAccessToken(userDetails);
        String refreshToken = generateRefreshToken(userDetails);
        jwtTokenRepository.save(
                JwtTokenRedisHash.builder()
                        .token(accessToken)
                        .expiration(jwtAccessExpiration)
                        .userId(userDetails.getId())
                        .tokenType("ACCESS")
                        .build()
        );
        jwtTokenRepository.save(
                JwtTokenRedisHash.builder()
                        .token(refreshToken)
                        .expiration(jwtRefreshExpiration)
                        .userId(userDetails.getId())
                        .tokenType("REFRESH")
                        .build()
        );
        return JwtAuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
}
