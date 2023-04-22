package com.example.backend.repository;

import com.example.backend.model.Passenger;
import org.springframework.data.repository.CrudRepository;

public interface PassengerRepository extends CrudRepository<Passenger,Long> {
}
