package com.petshare.backend.controller;

import com.petshare.backend.DTO.GetPageableRequest;
import com.petshare.backend.DTO.PageModel;
import com.petshare.backend.DTO.PetRequest;
import com.petshare.backend.DTO.PetResponse;
import com.petshare.backend.service.PetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
@Validated
@CrossOrigin
public class PetController {

    private final PetService petService;

    @PostMapping("pet")
    public ResponseEntity<?> addPet(
            @ModelAttribute @Valid PetRequest request
            ){
        return ResponseEntity
                .status(201)
                .body(petService.addPet(request));
    }

    @GetMapping("pet")
    public ResponseEntity<PageModel<PetResponse>> getPets(GetPageableRequest request){
        return ResponseEntity
                .status(200)
                .body(petService.getPets(request));
    }
}
