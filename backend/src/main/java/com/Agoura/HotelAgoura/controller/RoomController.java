package com.Agoura.HotelAgoura.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Agoura.HotelAgoura.model.FoodItem;
import com.Agoura.HotelAgoura.model.Room;
import com.Agoura.HotelAgoura.repository.RoomRepo;
import com.Agoura.HotelAgoura.service.RoomService;


@CrossOrigin(origins = "http://localhost:3000")

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
		System.out.println(myFile.toString());
		room.setImage(myFile.toString());
		
		System.out.println(myFile.getAbsolutePath().toString());
	    myFile.createNewFile();
		FileOutputStream fos =new FileOutputStream(myFile);
		fos.write(file.getBytes());
		fos.close();
		return rs.saveRoom(room);
		
	}
	
	// get all food Items
			@GetMapping("/get")
			public List<Room> getAllRooms(){
				return rp.findAll();
			}	
			
	
	
	
	


}
