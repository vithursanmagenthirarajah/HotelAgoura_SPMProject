package com.Agoura.HotelAgoura.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Agoura.HotelAgoura.model.HallReservation;

public interface ReservationRepo extends JpaRepository<HallReservation, Integer>{

}
