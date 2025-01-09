package com.example.backend;

import com.example.backend.model.TouristPlace;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BackendApplicationTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void contextLoads() {
        // Context load test
    }

    @Test
    void testGetTouristPlaces() {
        ResponseEntity<TouristPlace[]> response = restTemplate.getForEntity("/api/tourist-places", TouristPlace[].class);
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        TouristPlace[] places = response.getBody();
        assertThat(places).isNotNull();
        assertThat(places.length).isGreaterThan(0);
    }
}

