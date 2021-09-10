package com.Agoura.HotelAgoura.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Agoura.HotelAgoura.model.RoomStatus;

@Repository
public interface RoomstatusRepo extends JpaRepository<RoomStatus, Long>{

}
