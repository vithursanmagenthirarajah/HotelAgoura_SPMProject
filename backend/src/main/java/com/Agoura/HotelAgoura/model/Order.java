package com.Agoura.HotelAgoura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")


public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "Name")
	private String name;

	@Column(name = "HomeNo")
	private String no;
	
	@Column(name = "street")
	private String street;
	
	@Column(name = "City")
	private String city;
	
	@Column(name = "phone_no")
	private String phoneno;
	
	@Column(name = "Food_name")
	private String foodItemName;
	
	@Column(name = "price")
	private String price;
	
	@Column(name = "paymrnt_method")
	private String payment;

	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Order(long id, String name, String no, String street, String city, String phoneno, String foodItemName,
			String price, String payment) {
		super();
		this.id = id;
		this.name = name;
		this.no = no;
		this.street = street;
		this.city = city;
		this.phoneno = phoneno;
		this.foodItemName = foodItemName;
		this.price = price;
		this.payment = payment;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getNo() {
		return no;
	}


	public void setNo(String no) {
		this.no = no;
	}


	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getPhoneno() {
		return phoneno;
	}


	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
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


	public String getPayment() {
		return payment;
	}


	public void setPayment(String payment) {
		this.payment = payment;
	}


	
	
	
}
