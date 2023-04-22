package com.example.backend.controller;

import com.example.backend.model.Flight;
import com.example.backend.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class FightController {

    @Autowired
    FlightRepository flightRepository;

    @GetMapping("/flight/getAll")
    public List<Flight> getAllFlight(){
        List<Flight> flightList = new ArrayList<>();
        Iterable<Flight> iterable = flightRepository.findAll();
        iterable.forEach(flightList::add);
        return  flightList;
    }

    @PostMapping("/flight/get")
    public List<Flight> getByName(@RequestBody Object ob){

        HashMap<String,String> map= (HashMap<String, String>) ob;
        List<Flight> flightList = new ArrayList<>();

        Flight defaultFlight = new Flight();
        defaultFlight.setFname("Flight for said route is not available");
        Iterable<Flight> iterable= checkEntry(map.get("source"),map.get("destination"));
        iterable.forEach(flightList::add);
        if(flightList.isEmpty())
            flightList.add(defaultFlight);
        return flightList;
    }

    @PostMapping("/flight")
    public ResponseEntity setFlights(@RequestBody Flight flight){
    flightRepository.save(flight);


        return new ResponseEntity(HttpStatus.OK);

    }
    public Iterable<Flight> checkEntry(String source, String destination){
        Iterable<Flight> iterable;
        if(!(source.isEmpty()||destination.isEmpty())){
            iterable = flightRepository.findFlightBySourceAndDestination(source, destination);
        }
        else {
            iterable = flightRepository.findAll();
        }
        return iterable;
    }

}
