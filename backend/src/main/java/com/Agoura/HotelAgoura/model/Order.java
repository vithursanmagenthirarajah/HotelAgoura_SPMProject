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
	private String hno;
	
	@Column(name = "street")
	private String street;
	
	@Column(name = "City")
	private String city;
	
	@Column(name = "phone_no")
	private String phoneno;
	
	@Column(name = "paymrnt_method")
	private String payment;

	
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Order(long id, String name, String hno, String street, String city, String phoneno, String payment) {
		super();
		this.id = id;
		this.name = name;
		this.hno = hno;
		this.street = street;
		this.city = city;
		this.phoneno = phoneno;
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
		return hno;
	}


	public void setNo(String hno) {
		this.hno = hno;
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


	public String getPayment() {
		return payment;
	}


	public void setPayment(String payment) {
		this.payment = payment;
	}
	
	
	
	
}
