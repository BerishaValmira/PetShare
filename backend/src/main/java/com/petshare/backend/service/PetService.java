package com.petshare.backend.service;

import com.petshare.backend.DTO.PetRequest;
import com.petshare.backend.DTO.PetResponse;
import com.petshare.backend.entity.Audio;
import com.petshare.backend.entity.Image;
import com.petshare.backend.entity.Pet;
import com.petshare.backend.repository.PetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PetService {

    private final PetRepository petRepository;

    private final StorageService storageService;

    public PetResponse addPet(PetRequest request){

        Pet pet = Pet.builder()
                .name(request.getName())
                .description(request.getDescription())
                .type(request.getType())
                .build();

        Image image = storageService.uploadImage(request.getImage());
        image.setPet(pet);

        Audio audio = storageService.uploadAudio(request.getAudio());
        audio.setPet(pet);

        pet.setAudio(audio);
        pet.setImage(image);

        Pet savedPet = petRepository.save(pet);

        return PetResponse.builder()
                .id(savedPet.getId())
                .name(savedPet.getName())
                .description(savedPet.getDescription())
                .type(savedPet.getType())
                .createdAt(savedPet.getCreatedAt())
                .build();
    }

    public List<PetResponse> getPets(){
        return petRepository.findAll().stream().map(pet ->
                PetResponse.builder()
                        .id(pet.getId())
                        .type(pet.getType())
                        .name(pet.getName())
                        .description(pet.getDescription())
                        .createdAt(pet.getCreatedAt())
                        .audio(storageService.downloadAudio(pet.getAudio().getName()))
                        .image(storageService.downloadImage(pet.getImage().getName()))
                        .build()
                ).collect(Collectors.toList());
    }

}
