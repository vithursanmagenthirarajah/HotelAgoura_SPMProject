package com.Agoura.HotelAgoura.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Agoura.HotelAgoura.model.Booking;

public interface BookingRepo extends JpaRepository<Booking, Long>{

}
