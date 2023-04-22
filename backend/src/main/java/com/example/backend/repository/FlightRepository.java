package com.example.backend.repository;

import com.example.backend.model.Flight;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FlightRepository extends CrudRepository<Flight,Long> {

    List<Flight> findFlightBySourceAndDestination(String source, String destination);
}
