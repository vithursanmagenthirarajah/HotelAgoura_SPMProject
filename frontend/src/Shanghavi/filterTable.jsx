// import React, { useState } from 'react'
// import expenses from './ViewExpense';
// import {Button} from 'react-bootstrap'


// const SearchTable= ()=>{
//     const[searchTerm,setsearchTerm]= useState("");
//         return (
//             <div>
//                   <div className="container">
//                 <input type="text" placeholder="search.." className="form-control"
//                 onChange={(e)=>{
//                    setsearchTerm(e.target.value)
//                 }}/>
//             </div>
//             <div className = "row">
//                         <table  className = "table table-striped table-bordered " style={{width:"900px",marginLeft: "200px"}}>

//                             <thead>
//                                 <tr>
//                                     <th>Date</th>
//                                     <th>Month</th>
//                                     <th>Expense Type</th>
//                                     <th>Amount</th>
//                                     <th>Description</th>
//                                     <th>Actions</th>
//                                  </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     expenses.filter(val=>{
//                                         if(searchTerm==="")
//                                         {return val;}
//                                 else if(val.expensetype.toLowerCase.includes(searchTerm.toLowerCase))
//                                 {
//                                     return val;
//                                 }}).map(
//                                         (expense )=> 
//                                         <tr key = {expense.id}>
//                                              <td> {expense.date} </td>  
//                                              <td> {expense.month} </td> 
//                                              <td> {expense.expensetype} </td>   
//                                              <td> {expense.amount}</td>
//                                              <td> {expense.description}</td> 
//                                              <td>
//                                                  <button style={{marginLeft: "45px" }}onClick={ () => this.editExpense(expense.id)} className="btn btn-info" >Update </button>
//                                                  <button style={{marginLeft: "25px"}} onClick={ () => this.deleteExpense(expense.id)} className="btn btn-danger">Delete </button>      
//                                              </td>
//                                         </tr>
//                                     )
// }
//                             </tbody>
//                         </table>

//                  </div>
//                 </div>

        

//         )
//     }

// export default SearchTable;