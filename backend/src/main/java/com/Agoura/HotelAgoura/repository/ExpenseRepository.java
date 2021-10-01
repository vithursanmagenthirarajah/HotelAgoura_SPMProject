package com.Agoura.HotelAgoura.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Agoura.HotelAgoura.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long>{

	
	 @Query("Select e from Expense e where e.month like %?1%"
	            + " or e.expensetype like %?1%")
	    public List<Expense> findAll(String searchKey);
}
