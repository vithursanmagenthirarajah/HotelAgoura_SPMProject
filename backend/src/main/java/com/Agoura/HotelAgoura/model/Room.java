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
	@Column(name = "beds", nullable = true)
	private String beds;
	@Column(name = "imagePath", nullable = true)
	private String image;
	@Column(name = "bathrooms", nullable = true)
	private String bathrooms;
	
	//Getters and Setters
	
	public String getBathrooms() {
		return bathrooms;
	}

	public void setBathrooms(String bathrooms) {
		this.bathrooms = bathrooms;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

	

	public String getBeds() {
		return beds;
	}

	public void setBeds(String beds) {
		this.beds = beds;
	}

	
	
	//Constructors
	public Room() {
		
	}

	public Room(Long rid, String type, String room_desc, String beds, String image, String bathrooms) {
		super();
		this.rid = rid;
		this.type = type;
		this.room_desc = room_desc;
		this.beds = beds;
		this.image = image;
		this.bathrooms = bathrooms;
	}

	


	
	
	
	
}
