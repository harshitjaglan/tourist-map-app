package com.example.backend.controller;

import com.example.backend.model.TouristPlace;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class TouristController {

    @GetMapping("/api/tourist-places")
    public List<TouristPlace> getTouristPlaces() {
        // Sample data; in a real application, fetch from a database
        return Arrays.asList(
                new TouristPlace("Eiffel Tower", "Iconic landmark in Paris.", 48.8584, 2.2945),
                new TouristPlace("Great Wall of China", "Historic fortification.", 40.4319, 116.5704),
                new TouristPlace("Statue of Liberty", "Famous statue in New York City.", 40.6892, -74.0445),
                new TouristPlace("Sydney Opera House", "Multi-venue performing arts centre.", -33.8568, 151.2153),
                new TouristPlace("Pyramids of Giza", "Ancient pyramids in Egypt.", 29.9792, 31.1342)
        );
    }
}

