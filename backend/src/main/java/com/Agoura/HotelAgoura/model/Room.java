package com.Agoura.HotelAgoura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Rooms")
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long rid;
	@Column(name = "type", nullable = true)
	private String type;
	@Column(name = "room_desc", nullable = true)
	private String room_desc;
	@Column(name = "capacity", nullable = true)
	private String capacity;
	@Column(name = "imagePath", nullable = true)
	private String image;
	@Column(name = "size", nullable = true)
	private String size;
	@Column(name = "price", nullable = true)
	private String price;
	@Column(name = "breakfast", nullable = true)
	private String breakfast;
	@Column(name = "pets", nullable = true)
	private String pets;
	
	public String getPets() {
		return pets;
	}

	public void setPets(String pets) {
		this.pets = pets;
	}

	
	
	//Getters and Setters
	
	
	
	//Constructors
	public Room() {
		
	}

	public Long getRid() {
		return rid;
	}

	public void setRid(Long rid) {
		this.rid = rid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRoom_desc() {
		return room_desc;
	}

	public void setRoom_desc(String room_desc) {
		this.room_desc = room_desc;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public Room(Long rid, String type, String room_desc, String capacity, String image, String size, String price,
			String breakfast, String pets) {
		super();
		this.rid = rid;
		this.type = type;
		this.room_desc = room_desc;
		this.capacity = capacity;
		this.image = image;
		this.size = size;
		this.price = price;
		this.breakfast = breakfast;
		this.pets = pets;
	}

	

	

	

	


	
	
	
	
}
