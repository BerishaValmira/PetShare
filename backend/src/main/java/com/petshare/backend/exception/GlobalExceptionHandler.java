package com.petshare.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleException(NotFoundException exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND.value())
                .body(
                        CustomException.builder()
                                .messages(new String[]{exception.getMessage()})
                                .httpStatus(HttpStatus.NOT_FOUND.value())
                                .timestamp(ZonedDateTime.now(ZoneId.of("Z")))
                                .build()
                );
    }

}
