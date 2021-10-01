package com.Agoura.HotelAgoura.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Agoura.HotelAgoura.exception.ResourceNotFoundException;
import com.Agoura.HotelAgoura.model.Booking;

import com.Agoura.HotelAgoura.repository.BookingRepo;

@CrossOrigin(origins = {"http://localhost:3000", "http://someserver:3001"})

@RestController
@RequestMapping("/api/Booking")
public class BookingController {
	@Autowired
	private BookingRepo bookingRepo;
	@GetMapping("/booking")
	public List<Booking> getAllVenue(){
		return bookingRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Booking getBookingById(@PathVariable("id") Long bookID) {
		return bookingRepo.findById(bookID).get();
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
		Booking booking = bookingRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
		
		bookingRepo.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping("/addBooking")
	public Booking createBooking(@RequestBody Booking booking) {
		return bookingRepo.save(booking);
	}
	

}
