package com.authenticationservice.domain.models.entities;

import com.authenticationservice.domain.enums.ThemeColorEnum;
import com.authenticationservice.domain.enums.ThemeModeEnum;
import com.authenticationservice.domain.enums.UserRoleEnum;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_entity")
public class UserEntity implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "nickname", nullable = false, unique = true)
    private String nickname;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "password", nullable = false)
    private String password;

    @Builder.Default
    @Column(name = "is_enabled", nullable = false)
    private Boolean isEnabled = false;

    @Builder.Default
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @Column(name = "last_login")
    private LocalDateTime lastLogin;

    @Builder.Default
    @Column(name = "send_notification_to_email", nullable = false)
    private Boolean sendNotificationToEmail = true;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "theme_color", nullable = false, length = 20)
    private ThemeColorEnum themeColor = ThemeColorEnum.BISQUE;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "theme_mode", nullable = false, length = 6)
    private ThemeModeEnum themeMode = ThemeModeEnum.LIGHT;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false, length = 20)
    private UserRoleEnum role;

    @Builder.Default
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserSpecialPermissionEntity> userSpecialPermissions = new ArrayList<>();

    @Column(name = "verification_token")
    private String verificationToken;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isEnabled() {
        return getIsEnabled();
    }
}