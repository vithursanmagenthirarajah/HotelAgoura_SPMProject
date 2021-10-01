package com.Agoura.HotelAgoura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Bookings")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bid;
	@Column(name = "startDate", nullable = true)
	private String startDate;
	@Column(name = "endDate", nullable = true)
	private String endDate;
	@Column(name = "daysLeft", nullable = true)
	private String daysLeft;
	@Column(name = "payment", nullable = true)
	private String payment;
	public Long getBid() {
		return bid;
	}
	public void setBid(Long bid) {
		this.bid = bid;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getDaysLeft() {
		return daysLeft;
	}
	public void setDaysLeft(String daysLeft) {
		this.daysLeft = daysLeft;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	public Booking(Long bid, String startDate, String endDate, String daysLeft, String payment) {
		super();
		this.bid = bid;
		this.startDate = startDate;
		this.endDate = endDate;
		this.daysLeft = daysLeft;
		this.payment = payment;
	}
	public Booking() {
		
	}
	
	

}
