package com.petshare.backend.service;

import com.petshare.backend.entity.Audio;
import com.petshare.backend.entity.Image;
import com.petshare.backend.exception.NotFoundException;
import com.petshare.backend.repository.AudioRepository;
import com.petshare.backend.repository.ImageRepository;
import com.petshare.backend.util.RandomFourGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StorageService {
    private final ImageRepository imageRepository;

    private final AudioRepository audioRepository;

    private final String IMAGE_PATH = "C:/Users/SherifHoti/Desktop/PetShare-v2/images/";

    private final String AUDIO_PATH = "C:/Users/SherifHoti/Desktop/PetShare-v2/audios/";

    public Image uploadImage(MultipartFile file){

        try{
            // Generate a unique filename for the audio file
            String originalFilename = file.getOriginalFilename();
            System.out.println(file.getContentType());
            String fileExtension = StringUtils.getFilenameExtension(originalFilename);
            String uniqueFilename = RandomFourGenerator.generateRandomFourLetter();
            String filePath = IMAGE_PATH+uniqueFilename+".jpeg";

            Image image = Image.builder()
                    .name(uniqueFilename)
                    .type(file.getContentType())
                    .filePath(filePath)
                    .build();

            file.transferTo(new File(filePath));

            return imageRepository.save(image);
        }catch (IOException e){
            throw new NotFoundException(e.getMessage());
        }

    }

    public byte[] downloadImage(String fileName) {

        try {
            Image image = imageRepository.findByName(fileName).orElseThrow(() -> new NotFoundException("File not found"));

            String filePath = image.getFilePath();
            byte[] imageData = Files.readAllBytes(new File(filePath).toPath());

            return imageData;
        } catch (IOException e) {
            throw new NotFoundException(e.getMessage());
        }
    }


    public Audio uploadAudio(MultipartFile file) {
        try {
            // Generate a unique filename for the audio file
            String originalFilename = file.getOriginalFilename();
            String fileExtension = StringUtils.getFilenameExtension(originalFilename);
            String uniqueFilename = RandomFourGenerator.generateRandomFourLetter();
            String filePath = AUDIO_PATH + uniqueFilename;

            Audio audio = Audio.builder()
                    .name(uniqueFilename)
                    .type(file.getContentType())
                    .filePath(filePath)
                    .build();

            file.transferTo(new File(filePath));
            return audioRepository.save(audio);
        } catch (IOException e) {
            throw new NotFoundException(e.getMessage());
        }
    }

    private String generateUniqueFilename() {
        // TODO: Implement a logic to generate a unique filename
        return UUID.randomUUID().toString();
    }


    public byte[] downloadAudio(String fileName) {

        try {
            Audio audio = audioRepository.findByName(fileName).orElseThrow(() -> new NotFoundException("File not found"));

            String filePath = audio.getFilePath();
            byte[] audioData = Files.readAllBytes(new File(filePath).toPath());

            return audioData;
        } catch (IOException e) {
            throw new NotFoundException(e.getMessage());
        }
    }
}
