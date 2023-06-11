package com.petshare.backend.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PetRequest {


    @NotBlank(message = "Name is required")
    @NotEmpty(message = "Name is required")
    private String name;

    @NotBlank(message = "Type is required")
    @NotEmpty(message = "Type is required")
    private String type;

    @Size(max = 500, message = "Description must be less than or equal to 1000 characters")
    private String description;

    private MultipartFile image;

    private MultipartFile audio;

}
