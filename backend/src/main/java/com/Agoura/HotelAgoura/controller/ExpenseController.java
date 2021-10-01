package com.Agoura.HotelAgoura.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Agoura.HotelAgoura.exception.ResourceNotFoundException;
import com.Agoura.HotelAgoura.model.Expense;
import com.Agoura.HotelAgoura.repository.ExpenseRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/Expense/")


public class ExpenseController {
	

	@Autowired
	private ExpenseRepository expenseRepository;
	

		// create expense rest api
		@PostMapping("/addexpense")
		public Expense createExpense(@RequestBody Expense expense) {
			return expenseRepository.save(expense);
		}
		
		 @GetMapping("/search")
		 public List<Expense> getParts(@Param("searchKey") String searchKey){

		        if(searchKey!=null){

//		            List result = repo.findAll((searchKey));
//		            System.out.println(result);
		            return expenseRepository.findAll(searchKey);

		        }
		        return expenseRepository.findAll();
		    }
		
//		// get all expense
		@GetMapping("/getexpenses")
		public List<Expense> getAllExpenses(){
				return expenseRepository.findAll();
		}		
		
		// get expense by id rest api
		@GetMapping("/getexpenses/{id}")
		public ResponseEntity<Expense> getExpenseById(@PathVariable Long id) {
			Expense expense = expenseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Expense not exist with id :" + id));
			return ResponseEntity.ok(expense);
		}
		
		// update expense rest api
		@PutMapping("/updateexpense/{id}")
		public ResponseEntity<Expense> updateExpense(@PathVariable Long id, @RequestBody Expense expenseDetails){
			Expense expense = expenseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Expense not exist with id :" + id));
			
			expense.setDate(expenseDetails.getDate());
			expense.setMonth(expenseDetails.getMonth());
			expense.setExpensetype(expenseDetails.getExpensetype());
			expense.setAmount(expenseDetails. getAmount());
			expense.setDescription(expenseDetails.getDescription());
			
			Expense updatedExpense = expenseRepository.save(expense);
			return ResponseEntity.ok(updatedExpense);
		}
		
		// delete expense rest api
		@DeleteMapping("/deleteexpense/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteExpense(@PathVariable Long id){
			Expense expense = expenseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Expense not exist with id :" + id));
			
			expenseRepository.delete(expense);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		

}
