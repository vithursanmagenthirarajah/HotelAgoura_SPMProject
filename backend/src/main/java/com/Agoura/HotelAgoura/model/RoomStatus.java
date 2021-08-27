package com.Agoura.HotelAgoura.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Roomstatus")
public class RoomStatus {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long rsid;
	@Column(name = "roomNo", nullable = true)
	private String roomNo;
	@Column(name = "cFName", nullable = true)
	private String cFName;
	@Column(name = "cLName", nullable = true)
	private String cLName;
	@Column(name = "dateBooked", nullable = true)
	private String dateBooked;
	@Column(name = "lastDate", nullable = true)
	private String lastDate;
	public Long getRsid() {
		return rsid;
	}
	public void setRsid(Long rsid) {
		this.rsid = rsid;
	}
	public String getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}
	public String getcFName() {
		return cFName;
	}
	public void setcFName(String cFName) {
		this.cFName = cFName;
	}
	public String getcLName() {
		return cLName;
	}
	public void setcLName(String cLName) {
		this.cLName = cLName;
	}
	public String getDateBooked() {
		return dateBooked;
	}
	public void setDateBooked(String dateBooked) {
		this.dateBooked = dateBooked;
	}
	public String getLastDate() {
		return lastDate;
	}
	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}
	public RoomStatus(Long rsid, String roomNo, String cFName, String cLName, String dateBooked, String lastDate) {
		super();
		this.rsid = rsid;
		this.roomNo = roomNo;
		this.cFName = cFName;
		this.cLName = cLName;
		this.dateBooked = dateBooked;
		this.lastDate = lastDate;
	}
	public RoomStatus() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
