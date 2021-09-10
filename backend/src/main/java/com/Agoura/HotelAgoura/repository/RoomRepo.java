package com.Agoura.HotelAgoura.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Agoura.HotelAgoura.model.Room;

@Repository
public interface RoomRepo extends JpaRepository<Room, Long>{

}
