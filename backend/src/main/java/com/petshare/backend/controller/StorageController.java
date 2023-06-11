package com.petshare.backend.controller;

import com.petshare.backend.entity.Audio;
import com.petshare.backend.entity.Image;
import com.petshare.backend.service.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class StorageController {
    private final StorageService service;

    @PostMapping("/image")
    public ResponseEntity<?> uploadImage(
            @RequestParam("image")MultipartFile file
            ){
        Image uploadImage = service.uploadImage(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @GetMapping("/image/{fileName}")
    public ResponseEntity<?> downloadImage(
            @PathVariable String fileName
    ){
        byte[] imageData = service.downloadImage(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/jpeg"))
                .body(imageData);
    }

    @PostMapping("/audio")
    public ResponseEntity<?> uploadAudio(
            @RequestParam("audio")MultipartFile file
    ){
        Audio uploadAudio = service.uploadAudio(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadAudio);
    }

    @GetMapping("/audio/{fileName}")
    public ResponseEntity<?> downloadAudio(
            @PathVariable String fileName
    ){
        byte[] audioData = service.downloadAudio(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("audio/mp4"))
                .body(audioData);
    }
}
