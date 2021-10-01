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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Agoura.HotelAgoura.exception.*;
import com.Agoura.HotelAgoura.repository.*;
import com.Agoura.HotelAgoura.model.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Order/")


public class OrderController {
	@Autowired
	private OrderRepository OrderRepository ;
	
	
	// Add food items
	@PostMapping("/add")
	public Order createOrder(@RequestBody Order Order) {
		return OrderRepository.save(Order);
	}
	
	// get all food Items
	@GetMapping("/get")
	public List<Order> getAllItems(){
			return OrderRepository.findAll();
	}	
			
			
	// get food Item by id 
	@GetMapping("/get/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
		Order Order = OrderRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
			return ResponseEntity.ok(Order);
	}
	
	// update Food Item
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order Order){
		Order OrderF = OrderRepository.findById(id) 
				.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
		
		OrderF.setName(Order.getName());
		OrderF.setNo(Order.getNo());
		OrderF.setStreet(Order.getStreet());
		OrderF.setCity(Order.getCity());
		OrderF.setPhoneno(Order.getPhoneno());
		OrderF.setPayment(Order.getPayment());
		
		Order updateOrder = OrderRepository.save(OrderF);
		return ResponseEntity.ok(updateOrder);
	}
	
	// delete food item
			@DeleteMapping("/delete/{id}")
			public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long id){
				Order Order = OrderRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
				
				OrderRepository.delete(Order);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}
}
