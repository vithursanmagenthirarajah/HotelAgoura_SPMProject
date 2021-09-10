package com.Agoura.HotelAgoura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="FoodItem")

public class FoodItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "FItem_Name")
	private String foodItemName;

	@Column(name = "FItem_Price")
	private String price;
	
	@Column(name = "FItem_Description")
	private String description;
	
	@Column(name = "FItem_Category")
	private String category;
	
	@Column(name = "FItemImage_Path")
	private String path;
	
	
	

	public FoodItem() {
	
	}




	public FoodItem(long id, String foodItemName, String price, String description, String category, String path) {
		super();
		this.id = id;
		this.foodItemName = foodItemName;
		this.price = price;
		this.description = description;
		this.category = category;
		this.path = path;
	}




	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}




	public String getFoodItemName() {
		return foodItemName;
	}




	public void setFoodItemName(String foodItemName) {
		this.foodItemName = foodItemName;
	}




	public String getPrice() {
		return price;
	}




	public void setPrice(String price) {
		this.price = price;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public String getCategory() {
		return category;
	}




	public void setCategory(String category) {
		this.category = category;
	}




	public String getPath() {
		return path;
	}




	public void setPath(String path) {
		this.path = path;
	}
	
	
	
	
}
