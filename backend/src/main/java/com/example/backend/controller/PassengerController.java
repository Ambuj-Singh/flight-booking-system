package com.example.backend.controller;

import com.example.backend.model.Passenger;
import com.example.backend.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PassengerController {

    @Autowired
    PassengerRepository passengerRepository;

    @GetMapping("/flyaway")
    public List<Passenger> getAllPassengers(){
        List<Passenger> passengerList = new ArrayList<>();
        Iterable<Passenger> iterable = passengerRepository.findAll();
        iterable.forEach(passengerList::add);
        return passengerList;

    }

    @PostMapping("/flyaway/passenger/save")
    public Passenger postPassengers(@RequestBody Passenger passenger){

        return passengerRepository.save(passenger);
    }
}
