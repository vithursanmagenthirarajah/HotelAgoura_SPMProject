package com.Agoura.HotelAgoura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Expense")
public class Expense {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "Date")
	private String date;
	
	@Column(name = "Month")
	private String month; 
	
	@Column(name = "Expense_type")
	private String expensetype;
	
	@Column(name = "Amount")
	private  double amount;
	
	@Column(name = "Description")
	private String description;
	

	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Expense(long id, String date, String month, String expensetype, double amount, String description) {
		super();
		this.id = id;
		this.date = date;
		this.month = month;
		this.expensetype = expensetype;
		this.amount = amount;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getExpensetype() {
		return expensetype;
	}

	public void setExpensetype(String expensetype) {
		this.expensetype = expensetype;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	
	
}
