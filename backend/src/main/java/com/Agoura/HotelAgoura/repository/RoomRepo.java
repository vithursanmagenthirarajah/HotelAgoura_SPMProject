package com.Agoura.HotelAgoura.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Agoura.HotelAgoura.model.Room;

@Repository
public interface RoomRepo extends JpaRepository<Room, Long>{
	@Query("Select p from Room p where p.type like %?1%")
    public List<Room> findAll(String searchKey);
	

}
