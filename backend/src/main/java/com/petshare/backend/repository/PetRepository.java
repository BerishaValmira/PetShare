package com.petshare.backend.repository;

import com.petshare.backend.entity.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PetRepository extends JpaRepository<Pet, UUID> {
}
