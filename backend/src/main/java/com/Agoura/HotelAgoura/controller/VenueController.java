package com.Agoura.HotelAgoura.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;


import com.Agoura.HotelAgoura.exception.ResourceNotFoundException;
import com.Agoura.HotelAgoura.model.FoodItem;
import com.Agoura.HotelAgoura.model.Venue;

import com.Agoura.HotelAgoura.repository.VenueRepo;

//import antlr.StringUtils;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/venue")
public class VenueController {
	
	@Autowired
	private VenueRepo repo;
	
	@GetMapping("/venues")
	public List<Venue> getAllVenue(){
		return repo.findAll();
	}
	
	@Value("${file.upload-dir}")
	String FILE_DIRECTORY;
	
//	@PostMapping("/addVenue")
//	public Venue saveVenue(@RequestParam("Img") MultipartFile multipartfile, @ModelAttribute Venue venue) throws IOException{
//		
//		
//		File myFile = new File(FILE_DIRECTORY + multipartfile.getOriginalFilename());
//		
//		venue.setImg(myFile.toString());
//		
//		
//		myFile.createNewFile();
//		FileOutputStream fos = new FileOutputStream(myFile);
//		
//		fos.write(multipartfile.getBytes());
//		fos.close();
//		
//		
//		
//		return repo.save(venue);
//	}
	
	@GetMapping("/venues/{id}")
	public ResponseEntity<Venue> getVenue(@PathVariable int id){
		Venue venue = repo.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Item does not exist"));
				
		return ResponseEntity.ok(venue);
		
	}
	
	@PutMapping("/updateVenue/{id}")
	public ResponseEntity<Venue> updateVenue(@PathVariable int id, @ModelAttribute Venue venue, @RequestParam("File") MultipartFile file) throws IOException{
		Venue vnue = repo.findById(id)
					     .orElseThrow(() -> new ResourceNotFoundException("Item does not exist"));
		
		File myFile = new File(FILE_DIRECTORY + file.getOriginalFilename());
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		vnue.setImg(fileName);
		myFile.createNewFile();
		FileOutputStream fos = new FileOutputStream(myFile);
		
		fos.write(file.getBytes());
		fos.close();
		
		vnue.setName(venue.getName());
		vnue.setDescription(venue.getDescription());
		vnue.setPrice(venue.getPrice());
		vnue.setType(venue.getType());
		
		vnue.setAvailability(venue.getAvailability());
		
		Venue updatedVenue = repo.save(vnue);
		
		return ResponseEntity.ok(updatedVenue);
		
	}
	
	@DeleteMapping("/deleteVenue/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteVenue(@PathVariable int id){
		Venue venue = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Venue not found"));
		
		repo.delete(venue);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	@PostMapping("/addVenue")
	public ResponseEntity<Object> fileUpload(@RequestParam("File") MultipartFile file,@ModelAttribute Venue venue) throws IOException{
		
		
		File myFile = new File(FILE_DIRECTORY + file.getOriginalFilename());
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		venue.setImg(fileName);
		myFile.createNewFile();
		FileOutputStream fos = new FileOutputStream(myFile);
		
		fos.write(file.getBytes());
		fos.close();
		
		
		System.out.println(venue.getName());
		
		repo.save(venue);
		
		return new ResponseEntity<Object>("The file has been uploaded", HttpStatus.OK);
		
		
	}
	
	@PutMapping("/setAvailability/{id}")
	public ResponseEntity<Venue> setAvailabilityStatus(@PathVariable int id, @ModelAttribute Venue venue){
		Venue vnue = repo.findById(id)
						 .orElseThrow(()-> new ResourceNotFoundException("Venue not found"));
		
		vnue.setAvailability(venue.getAvailability());
		
		Venue updatedVenue = repo.save(vnue);
		
		return ResponseEntity.ok(updatedVenue);
		
	}
	
//	@GetMapping("/Images/{id}")
//	public String getImages(@PathVariable int id) {
//		Venue venue = repo.findById(id)
//						.orElseThrow(()-> new ResourceNotFoundException("Venue Not Found"));
//		
//		return FILE_DIRECTORY + venue.getImg();
//	}

}
