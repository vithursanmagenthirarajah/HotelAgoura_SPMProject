package com.Agoura.HotelAgoura.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.Agoura.HotelAgoura.exception.ResourceNotFoundException;
import com.Agoura.HotelAgoura.model.FoodItem;
import com.Agoura.HotelAgoura.model.Room;
import com.Agoura.HotelAgoura.repository.RoomRepo;
import com.Agoura.HotelAgoura.service.RoomService;



@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})

@RestController
@RequestMapping("/api/Rooms")

public class RoomController {
	@Autowired
	private RoomService rs;
	@Autowired
	private RoomRepo rp;
	@Value("${file.upload-dir}")
	String FILE_DIRECTORY;
	
	@PostMapping("/add")
	public Room fileUpload(@RequestParam("File") MultipartFile file,@ModelAttribute Room room) throws IOException{
		File myFile = new File(FILE_DIRECTORY+file.getOriginalFilename());
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		System.out.println(fileName);
		System.out.println(FILE_DIRECTORY);
		room.setImage(fileName);
		
	    myFile.createNewFile();
		FileOutputStream fos =new FileOutputStream(myFile);
		fos.write(file.getBytes());
		System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(file.getOriginalFilename()).toString());
		fos.close();
		return rs.saveRoom(room);
		
		
	}
	
	
	// get all food Items
			@GetMapping("/get")
			public List<Room> getAllRooms(){
				return rp.findAll();
			}
		@GetMapping("/{id}")
		public Room getRoomById(@PathVariable("id") Long RoomID) {
			return rp.findById(RoomID).get();
		}
		
		@PutMapping("/update/{id}")
		public Room updateRoom(@PathVariable("id") Long RoomID, @ModelAttribute Room room, @RequestParam("File") MultipartFile file) throws IOException{
			Room room1 = rp.findById(RoomID).get();
			if(Objects.nonNull(room.getType()) && !"".equalsIgnoreCase(room.getType())) {
				room1.setType(room.getType());
			}
			if(Objects.nonNull(room.getBreakfast()) && !"".equalsIgnoreCase(room.getBreakfast())) {
				room1.setBreakfast(room.getBreakfast());
			}
			if(Objects.nonNull(room.getPets()) && !"".equalsIgnoreCase(room.getPets())) {
				room1.setPets(room.getPets());
			}
			if(Objects.nonNull(room.getRoom_desc()) && !"".equalsIgnoreCase(room.getRoom_desc())) {
				room1.setRoom_desc(room.getRoom_desc());
			}
			if(Objects.nonNull(room.getPrice()) && !"".equalsIgnoreCase(room.getPrice())) {
				room1.setPrice(room.getPrice());
			}
			if(Objects.nonNull(room.getCapacity()) && !"".equalsIgnoreCase(room.getCapacity())) {
				room1.setCapacity(room.getCapacity());
			}
			if(Objects.nonNull(room.getSize()) && !"".equalsIgnoreCase(room.getSize())) {
				room1.setSize(room.getSize());
			}
			File myFile = new File(FILE_DIRECTORY+file.getOriginalFilename());
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			System.out.println(fileName);
			room1.setImage(fileName);
			
		    myFile.createNewFile();
			FileOutputStream fos =new FileOutputStream(myFile);
			fos.write(file.getBytes());
			fos.close();
			
			
			return rp.save(room1);
			
			
		}
		
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteRoom(@PathVariable Long id){
			Room room = rp.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
			
			rp.delete(room);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		@GetMapping("/search")
	    public List<Room> getType(@Param("searchKey") String searchKey){

	        if(searchKey!=null){

//	            List<Room> result = rp.findAll((searchKey));
//	            System.out.println(result);
	            return rp.findAll(searchKey);

	        }
	        return rp.findAll();
	    }
		
			
	
	
			
	
	
	
	


}
