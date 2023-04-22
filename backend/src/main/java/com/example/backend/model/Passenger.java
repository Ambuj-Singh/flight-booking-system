package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "passenger")
@EntityListeners(AuditingEntityListener.class)
public class Passenger {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long passenger_id;

    @Column(name = "pname",updatable = false)
    private String pname;

    @Column(name = "birth_date",updatable = false)
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "dd-mm-yyyy")
    private Date birth_date;

    @Column(name="booking_date", nullable = false,updatable = false)
    @Temporal(TemporalType.DATE)
    private Date booking_date;

    //way to create a booking id.
    //String booking_id = "#"+String.valueOf(booking_date)+String.valueOf(passenger_id);

    @Column(name = "total_passenger",updatable = false)
    private int total_passenger;

    @Column(name = "amount",updatable = false)
    private int amount;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "flight_id")
    private Flight flight;

    public Passenger(){ }

    public Passenger(Long passenger_id,String pname,Date birth_date,Date booking_date,int total_passenger,int amount,Flight flight){
        this.passenger_id=passenger_id;
        this.pname=pname;
        this.birth_date=birth_date;
        this.booking_date=booking_date;
        this.total_passenger=total_passenger;
        this.amount=amount;
        this.flight=flight;

    }

    public void setPassenger_id(Long passenger_id) {
        this.passenger_id = passenger_id;
    }

    public Long getPassenger_id() {
        return passenger_id;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getPname() {
        return pname;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setTotal_passenger(int total_passenger) {
        this.total_passenger = total_passenger;
    }

    public int getTotal_passenger() {
        return total_passenger;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getAmount() {
        return amount;
    }

    public void setBooking_date(Date booking_date) {
        this.booking_date = booking_date;
    }

    public Date getBooking_date() {
        return booking_date;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Flight getFlight() {
        return flight;
    }
}