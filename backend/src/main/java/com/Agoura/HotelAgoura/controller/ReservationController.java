package com.Agoura.HotelAgoura.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Agoura.HotelAgoura.exception.ResourceNotFoundException;
import com.Agoura.HotelAgoura.model.HallReservation;

import com.Agoura.HotelAgoura.repository.ReservationRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/reservation")
public class ReservationController {
	
	@Autowired
	private ReservationRepo repo;
	
	@GetMapping("/reservations")
	public List<HallReservation> getAllReservations(){
		return repo.findAll();
	}
	
	@GetMapping("/reservations/{id}")
	public ResponseEntity<HallReservation> getVenue(@PathVariable int id){
		HallReservation res = repo.findById(id)
								  .orElseThrow(()-> new ResourceNotFoundException("Item Does Not exist"));
		
		return ResponseEntity.ok(res);
	}
	
	@PostMapping("/addReservation")
	public ResponseEntity<Object> addReservation(@RequestBody HallReservation reservation) throws IOException{
		
		repo.save(reservation);
		
		return new ResponseEntity<Object>("Reservation is made", HttpStatus.OK);	
	}
	
}
