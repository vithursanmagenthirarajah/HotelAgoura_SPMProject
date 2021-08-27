package com.Agoura.HotelAgoura.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Agoura.HotelAgoura.model.RoomStatus;

import com.Agoura.HotelAgoura.repository.RoomstatusRepo;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/status")

public class StatusController {
	@Autowired
	private RoomstatusRepo rp;
	@PostMapping("/add")
	public RoomStatus StatusUpload(@RequestBody RoomStatus roomstatus) {
		
		
		return rp.save(roomstatus);
		
		
	}
	@GetMapping("/get")
	public List<RoomStatus> getAllRoomStatus(){
		return rp.findAll();
	}
	

}
