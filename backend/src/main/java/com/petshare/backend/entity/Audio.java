package com.petshare.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "audios", indexes = @Index(name = "idx_audio_name", columnList = "name"))
@SuperBuilder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Audio extends BaseEntity{

    private String filePath;

    @Column(unique = true)
    private String name;

    private String type;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pet_id")
    private Pet pet;
}
