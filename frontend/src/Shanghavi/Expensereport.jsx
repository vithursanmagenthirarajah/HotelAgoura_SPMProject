import React, { Component } from 'react'
import ExpenseService from './services/ExpenseService';
import Print from "../Shanghavi/Report"

class ViewExpense extends Component {
    constructor(props) {
        super(props)

        this.state = {
                expenses: []
        }
        
    }

   

    componentDidMount(){
        ExpenseService.getExpenses().then((res) => {
            this.setState({ expenses: res.data});
        });
    }

    

    render() {
        return (
            <div>
                <br></br>
              
                 <h2 className="text-center" style={{ color:"#053b4b"}}>Expense Report</h2>
                
                 <Print />
                 <br></br>
                 
              
                 <div className = "row">
                        <table  className = "table table-striped table-bordered " style={{width:"70%",marginLeft: "150px"}}>

                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Month</th>
                                    <th>Expense Type</th>
                                     <th>Description</th>
                                    <th>Amount</th>
                                   
                                    
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.expenses.map(
                                        expense => 
                                        <tr key = {expense.id}>
                                            <td> {expense.date} </td> 
                                            <td> {expense.month} </td> 
                                             <td> {expense.expensetype} </td>   
                                             <td> {expense.description}</td> 
                                             <td> {expense.amount}</td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                          
                        </table>
                      
                 </div>
               
            </div>
        )
    }
}

export default ViewExpense
