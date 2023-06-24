package com.petshare.backend.util;
import java.util.Random;
public class RandomFourGenerator {
    private static final String ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    private static final int NUM_LETTERS = ALPHABET.length();

    public static String generateRandomFourLetter() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            int randomIndex = random.nextInt(NUM_LETTERS);
            char randomLetter = ALPHABET.charAt(randomIndex);
            sb.append(randomLetter);
        }

        return sb.toString();
    }

}
