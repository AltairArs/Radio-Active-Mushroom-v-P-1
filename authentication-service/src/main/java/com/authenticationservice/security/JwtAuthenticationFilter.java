package com.authenticationservice.security;

import com.authenticationservice.exceptions.AccessDeniedException;
import com.authenticationservice.exceptions.InvalidDataException;
import com.authenticationservice.repo.entity.UserRepository;
import com.authenticationservice.repo.redis.JwtTokenRepository;
import com.authenticationservice.services.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    public static final String BEARER_PREFIX = "Bearer ";
    public static final String HEADER_NAME = "Authorization";
    private final JwtService jwtService;
    private final JwtTokenRepository jwtTokenRepository;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authHeader = request.getHeader(HEADER_NAME);
        if (authHeader == null || !StringUtils.startsWith(authHeader, BEARER_PREFIX)){
            filterChain.doFilter(request, response);
            return;
        }
        String jwtToken = authHeader.substring(BEARER_PREFIX.length());
        Long id = Long.parseLong(jwtService.extractFromToken(jwtToken, "id"));
        String tokenType = jwtService.extractFromToken(jwtToken, "tokenType");
        if (StringUtils.isEmpty(tokenType) || tokenType.equals("REFRESH")){
            throw new AccessDeniedException("Can not authorize user with refresh token");
        }
        jwtTokenRepository.getByToken(jwtToken)
                .orElseThrow(() -> new AccessDeniedException("Token has expired or invalid"));
        UserDetails userDetails = userRepository.findById(id).orElseThrow(
                () -> new InvalidDataException("Token is invalid or expired")
        );
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities())
        );
        filterChain.doFilter(request, response);
    }
}