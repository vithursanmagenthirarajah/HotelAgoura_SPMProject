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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.Agoura.HotelAgoura.exception.*;
import com.Agoura.HotelAgoura.repository.*;
import com.Agoura.HotelAgoura.model.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/FoodItem/")
 
public class FoodItemController {

	@Autowired
	private FoodItemRepository FoodItemRepository;
	
	@Value("${file.upload-dir}")
	String FILE_DIRECTORY;
	
	// Add food items
//		@PostMapping("/add")
//		public FoodItem createItem(@RequestBody FoodItem FoodItem) {
//			return FoodItemRepository.save(FoodItem);
//		}
		
		@PostMapping("/add")
		public FoodItem fileUpload(@RequestParam("File") MultipartFile file,@ModelAttribute FoodItem FoodItem) throws IOException{
			File myFile = new File(FILE_DIRECTORY+file.getOriginalFilename());
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			System.out.println(fileName);
			FoodItem.setPath(fileName);
			
		    myFile.createNewFile();
			FileOutputStream fos =new FileOutputStream(myFile);
			fos.write(file.getBytes());
			fos.close();
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
		
//		// update Food Item
//		
//		@PutMapping("/update/{id}")
//		public ResponseEntity<FoodItem> updateItem(@PathVariable Long id, @RequestBody FoodItem FoodItemDetails){
//			FoodItem FItem = FoodItemRepository.findById(id) 
//					.orElseThrow(() -> new ResourceNotFoundException("FoodItem not exist with id :" + id));
//			
//			FItem.setFoodItemName(FoodItemDetails.getFoodItemName());
//			FItem.setPrice(FoodItemDetails.getPrice());
//			FItem.setDescription(FoodItemDetails.getDescription());
//			FItem.setCategory(FoodItemDetails.getCategory());
//			FItem.setPath(FoodItemDetails.getPath());
//			
//			FoodItem updatedFoodItem = FoodItemRepository.save(FItem);
//			return ResponseEntity.ok(updatedFoodItem);
//		}
		
//		@PutMapping("/update/{id}")
//		public FoodItem updateFood(@PathVariable("id") Long id, @ModelAttribute FoodItem FoodItem, @RequestParam("File") MultipartFile file) throws IOException{
//			FoodItem FoodItem1 = FoodItemRepository.findById(id).get();
//			if(Objects.nonNull(FoodItem.getFoodItemName()) && !"".equalsIgnoreCase(FoodItem.getFoodItemName())) {
//				FoodItem1.setFoodItemName(FoodItem.getFoodItemName());
//			}
//			if(Objects.nonNull(FoodItem.getPrice()) && !"".equalsIgnoreCase(FoodItem.getPrice())) {
//				FoodItem1.setPrice(FoodItem.getPrice());
//			}
//			if(Objects.nonNull(FoodItem.getDescription()) && !"".equalsIgnoreCase(FoodItem.getDescription())) {
//				FoodItem1.setDescription(FoodItem.getDescription());
//			}
//			if(Objects.nonNull(FoodItem.getCategory()) && !"".equalsIgnoreCase(FoodItem.getCategory())) {
//				FoodItem1.setCategory(FoodItem.getCategory());
//			}
//			File myFile = new File(FILE_DIRECTORY+file.getOriginalFilename());
//			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//			System.out.println(fileName);
//			FoodItem1.setPath(fileName);
//			
//		    myFile.createNewFile();
//			FileOutputStream fos =new FileOutputStream(myFile);
//			fos.write(file.getBytes());
//			fos.close();
//			
//			
//			return FoodItemRepository.save(FoodItem1);
//			
//		}
		
		@PutMapping("/update/{id}")
		public FoodItem updateFood(@PathVariable("id") Long id, @ModelAttribute FoodItem FoodItem, @RequestParam("File") MultipartFile file) throws IOException{
			FoodItem FoodItem1 = FoodItemRepository.findById(id).get();
			if(Objects.nonNull(FoodItem.getFoodItemName()) && !"".equalsIgnoreCase(FoodItem.getFoodItemName())) {
				FoodItem1.setFoodItemName(FoodItem.getFoodItemName());
			}
			if(Objects.nonNull(FoodItem.getPrice()) && !"".equalsIgnoreCase(FoodItem.getPrice())) {
				FoodItem1.setPrice(FoodItem.getPrice());
			}
			if(Objects.nonNull(FoodItem.getDescription()) && !"".equalsIgnoreCase(FoodItem.getDescription())) {
				FoodItem1.setDescription(FoodItem.getDescription());
			}
			if(Objects.nonNull(FoodItem.getCategory()) && !"".equalsIgnoreCase(FoodItem.getCategory())) {
				FoodItem1.setCategory(FoodItem.getCategory());
			}
			File myFile = new File(FILE_DIRECTORY+file.getOriginalFilename());
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			System.out.println(fileName);
			FoodItem1.setPath(fileName);
			
		    myFile.createNewFile();
			FileOutputStream fos =new FileOutputStream(myFile);
			fos.write(file.getBytes());
			fos.close();
			
			
			return FoodItemRepository.save(FoodItem1);
			
			
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
		
		//search food items
		  @GetMapping("/search")
		    public List<FoodItem> getParts(@Param("searchKey") String searchKey){

		        if(searchKey!=null){

//		            List result = repo.findAll((searchKey));
//		            System.out.println(result);
		            return FoodItemRepository.findAll(searchKey);

		        }
		        return FoodItemRepository.findAll();
		    }
		
}
