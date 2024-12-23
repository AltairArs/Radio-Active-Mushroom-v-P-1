package com.authenticationservice.domain.models.entities;

import com.authenticationservice.domain.enums.UserSpecialPermissionEnum;
import com.authenticationservice.domain.enums.UserRoleEnum;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(
        name = "base_permission_enity",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"user_role", "user_special_permission"})}
)
public class BasePermissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role", nullable = false, length = 20)
    private UserRoleEnum userRole;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_special_permission", nullable = false, length = 30)
    private UserSpecialPermissionEnum userSpecialPermission;

}