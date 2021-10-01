package com.Agoura.HotelAgoura.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="hall_resrvation")
public class HallReservation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="customer")
	private String customer;
	
	@Column(name="tel_no")
	private String tel_no;
	
	@Column(name="amount")
	private double amount;
	
	@Column(name="venue_name")
	private String venueName;
	
	
	
	

	public HallReservation() {
		// TODO Auto-generated constructor stub
	}





	public HallReservation(int id, Date date, String customer, String tel_no, double amount, String venueName) {
		super();
		this.id = id;
		this.date = date;
		this.customer = customer;
		this.tel_no = tel_no;
		this.amount= amount;
		this.venueName= venueName;
	}





	public int getId() {
		return id;
	}





	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}





	public String getVenueName() {
		return venueName;
	}





	public void setVenueName(String venueName) {
		this.venueName = venueName;
	}





	public void setDate(Date date) {
		this.date = date;
	}





	public String getCustomer() {
		return customer;
	}





	public void setCustomer(String customer) {
		this.customer = customer;
	}





	public String getTel_no() {
		return tel_no;
	}





	public void setTel_no(String tel_no) {
		this.tel_no = tel_no;
	}





	public double getAmount() {
		return amount;
	}





	public void setAmount(double amount) {
		this.amount = amount;
	}





	
	
	

}
