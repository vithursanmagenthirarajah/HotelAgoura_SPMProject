package com.Agoura.HotelAgoura.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Agoura.HotelAgoura.Helper.FileUploadHelper;

@RestController
public class FileuploadController {
	@Autowired
	private FileUploadHelper helper; 
	
	@PostMapping("/upload-file")
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file){
		try {
			
		
		if(file.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request Must Contain a file");
		}
		if(!file.getContentType().equals("image/jpeg")) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("JPEG only");
		}
		
		boolean f = helper.uploadFile(file);
		if(f) {
//			ResponseEntity.ok("FileUploadedSuccessfully");
			return ResponseEntity.ok("FileUploadedSuccessfully");
		}
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something Went Wrong!");
	}

}
