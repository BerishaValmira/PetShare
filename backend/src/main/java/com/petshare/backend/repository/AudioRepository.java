package com.petshare.backend.repository;

import com.petshare.backend.entity.Audio;
import com.petshare.backend.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AudioRepository extends JpaRepository<Audio, UUID> {
    Optional<Audio> findByName(String name);
}
