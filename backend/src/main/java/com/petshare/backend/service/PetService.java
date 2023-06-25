package com.petshare.backend.service;

import com.petshare.backend.DTO.GetPageableRequest;
import com.petshare.backend.DTO.PageModel;
import com.petshare.backend.DTO.PetRequest;
import com.petshare.backend.DTO.PetResponse;
import com.petshare.backend.entity.Audio;
import com.petshare.backend.entity.Image;
import com.petshare.backend.entity.Pet;
import com.petshare.backend.repository.PetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    public PageModel<PetResponse> getPets(GetPageableRequest request){

        Pageable pageable = PageRequest.of(request.getPage(), request.getSize(), Sort.by(request.getSortColumn()));

        if(request.getSortDirection().equals("DESC")){
            pageable = PageRequest.of(request.getPage(), request.getSize(), Sort.by(request.getSortColumn()).descending());
        }
        Page<Pet> data = petRepository.findAll(pageable);

        return PageModel.<PetResponse>builder()
                .page(data.getNumber())
                .size(data.getSize())
                .total(data.getTotalPages())
                .sortedColumn(request.getSortColumn())
                .data(data.stream().map(pet -> PetResponse.builder()
                        .id(pet.getId())
                        .type(pet.getType())
                        .name(pet.getName())
                        .description(pet.getDescription())
                        .createdAt(pet.getCreatedAt())
                        .audio(storageService.downloadAudio(pet.getAudio().getName()))
                        .image(storageService.downloadImage(pet.getImage().getName()))
                        .build()).collect(Collectors.toList()))
                .build();


    }

}
