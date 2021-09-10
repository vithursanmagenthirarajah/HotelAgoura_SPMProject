package com.Agoura.HotelAgoura.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Agoura.HotelAgoura.model.Room;
import com.Agoura.HotelAgoura.repository.RoomRepo;

@Service
public class RoomServiceImpl implements RoomService{

	@Autowired
	private RoomRepo roomrepo;
	@Override
	public Room saveRoom(Room room) {
		// TODO Auto-generated method stub
		return roomrepo.save(room);
	}
}
