package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="flight")
@EntityListeners(AuditingEntityListener.class)
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "flight_id")
    @JsonManagedReference
    private List<Passenger> passengers;

    @Column(name = "fname")
    private String fname;

    @Column(name = "destination")
    private String destination;

    @Column(name = "source")
    private String source;

    @Column(name = "total")
    private int total;

    @Column(name = "available")
    private int available;

    @Column(name = "price")
    private int price;


    public Flight(){ }

    public Flight(Long id, String fname, String destination, String source, int total, int available, int price,List<Passenger> passengers) {
        this.id = id;
        this.fname = fname;
        this.destination = destination;
        this.source = source;
        this.total = total;
        this.available = available;
        this.price = price;
        this.passengers=passengers;

    }
    public void setId(Long flight_id) {
        this.id = flight_id;
    }

    public Long getId() {
        return id;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getFname() {
        return fname;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDestination() {
        return destination;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getSource() {
        return source;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getTotal() {
        return total;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    public int getAvailable() {
        return available;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }
}
