package com.example.tdmu.repository;

import com.example.tdmu.entity.VerifiTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationTokenRepository extends JpaRepository<VerifiTokenEntity,String> {
    Optional<VerifiTokenEntity> findByToken(String token);
}
