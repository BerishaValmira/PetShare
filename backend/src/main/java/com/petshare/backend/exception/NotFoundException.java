package com.petshare.backend.exception;

public class NotFoundException extends RuntimeException{


    public NotFoundException(String fileNotFound) {
        super(fileNotFound);
    }
}
