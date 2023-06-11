package com.petshare.backend.repository;

import com.petshare.backend.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ImageRepository extends JpaRepository<Image, UUID> {
    Optional<Image> findByName(String name);
}
