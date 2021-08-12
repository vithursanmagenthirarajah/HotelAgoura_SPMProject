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
@RequestMapping("/api/FoodItem/")
 
public class FoodItemController {

	@Autowired
	private FoodItemRepository FoodItemRepository;
	
	 
	// Add food items
		@PostMapping("/add")
		public FoodItem createItem(@RequestBody FoodItem FoodItem) {
			return FoodItemRepository.save(FoodItem);
		}
		
		// get all food Items
		@GetMapping("/get")
		public List<FoodItem> getAllItems(){
			return FoodItemRepository.findAll();
		}	
		
		
		// get food Item by id 
		@GetMapping("/get/{id}")
		public ResponseEntity<FoodItem> getFoodItemById(@PathVariable Long id) {
			FoodItem FItem = FoodItemRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
			return ResponseEntity.ok(FItem);
		}
		
		// update Food Item
		
		@PutMapping("/update/{id}")
		public ResponseEntity<FoodItem> updateItem(@PathVariable Long id, @RequestBody FoodItem FoodItemDetails){
			FoodItem FItem = FoodItemRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("FoodItem not exist with id :" + id));
			
			FItem.setFoodItemName(FoodItemDetails.getFoodItemName());
			FItem.setPrice(FoodItemDetails.getPrice());
			FItem.setDescription(FoodItemDetails.getDescription());
			FItem.setCategory(FoodItemDetails.getCategory());
			FItem.setPath(FoodItemDetails.getPath());
			
			FoodItem updatedFoodItem = FoodItemRepository.save(FItem);
			return ResponseEntity.ok(updatedFoodItem);
		}
		
		// delete food item
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteFoodItem(@PathVariable Long id){
			FoodItem FItem = FoodItemRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
			
			FoodItemRepository.delete(FItem);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
