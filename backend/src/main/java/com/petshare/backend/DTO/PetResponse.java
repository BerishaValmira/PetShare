package com.petshare.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PetResponse{

    private UUID id;

    private String name;

    private String type;

    private String description;

    private Date createdAt;

    private byte[] image;

    private byte[] audio;
}
