package com.authenticationservice.domain.models.entities;

import com.authenticationservice.domain.enums.UserSpecialPermissionEnum;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(
        name = "user_special_permission_entity",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "user_special_permission"})}
)
public class UserSpecialPermissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_special_permission", nullable = false, length = 30)
    private UserSpecialPermissionEnum userSpecialPermission;

}