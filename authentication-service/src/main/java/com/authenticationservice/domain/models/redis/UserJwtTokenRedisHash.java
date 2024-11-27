package com.authenticationservice.domain.models.redis;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
@RedisHash("user_jwt_token")
public class UserJwtTokenRedisHash {
    @Id
    private Long userId;
    private String token;
}
