import React, { Component } from 'react'
import ExpenseService from './services/ExpenseService';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import axios from "axios";

class ViewExpense extends Component {
    constructor(props) {
        super(props)

        this.state = {
                expenses: [],
                searchWord: "",
               
        }
        this.addExpense = this.addExpense.bind(this);
        this.editExpense = this.editExpense.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
        this.reviewExpense = this.reviewExpense.bind(this);
        
    }

    deleteExpense(id){
        ExpenseService.deleteExpense(id).then( res => {
            this.setState({expenses: this.state.expenses.filter(expense => expense.id !== id)});

            
        });
    }



    editExpense(id){
        this.props.history.push(`/updateexpense/${id}`);
    }

    componentDidMount(){
        ExpenseService.getExpenses().then((res) => {
            this.setState({ expenses: res.data});
        });

        this.goBack();
    }

    

    addExpense(){
        this.props.history.push('/addexpense/_add');
    }

   reviewExpense(){
        this.props.history.push('/reviewexpense');
    }
  

 onSearch = () => {
    return axios
      .get(
        `http://localhost:8090/api/Expense/search/?searchKey=${this.state.searchWord}`
      )
      .then((res) => {
        this.setState({ expenses: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  goBack = () => {
    ExpenseService.getExpenses().then((res) => {
        this.setState({ expenses: res.data});
        this.setState({ searchWord: ""});
    });
}
 
    render() {
        
       
        return (
            <div>
                <br></br>
                <br></br>
                 <h2 className="text-center" style={{ color:"#053b4b"}}>Expense List</h2>
                 <br></br>
                 <br></br>
                 <div className="container">
                
          <FormControl
            type="text"
            placeholder="Search Here"
            className="mb-3"
            // className="mr-sm-2"
            value={this.state.searchWord}
            onChange={(e) =>
              this.setState({
                searchWord: e.target.value,
              })
            }
          />
         
          {this.state.searchWord != "" ? (
            <Button variant="outline-secondary" onClick={this.goBack}>
              X
            </Button>
          ) : null}
          <Button variant="outline-secondary" onClick={this.onSearch}>
            Search
          </Button>
          </div>
                 
                 <div className = "row">
                    
                <button className="btn" onClick={this.addExpense} style={{width:"220px",height:"40px",backgroundColor:"#034d67",color:"white",fontSize:"18px",marginLeft: "200px"}}> Add Expense Details</button>
                <button className="btn" onClick={this.reviewExpense} style={{width:"200px",height:"40px",backgroundColor:"#034d67",color:"white",fontSize:"18px",marginLeft: "470px"}}> Expense Report</button>
                {/* <button className="btn" onClick={this.searchExpense} style={{width:"200px",height:"40px",backgroundColor:"#034d67",color:"white",fontSize:"18px",marginLeft: "470px"}}> Search</button> */}
            
                 </div>
                
                 <br></br>
                 <div className = "row">
                        <table  className = "table table-striped table-bordered " style={{width:"900px",marginLeft: "200px"}}>

                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Month</th>
                                    <th>Expense Type</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Actions</th>
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
                                             <td> {expense.amount}</td>
                                             <td> {expense.description}</td> 
                                             <td>
                                                 <button style={{marginLeft: "45px" }}onClick={ () => this.editExpense(expense.id)} className="btn btn-info" >Update </button>
                                                 <button style={{marginLeft: "25px"}} onClick={ () => this.deleteExpense(expense.id)} className="btn btn-danger">Delete </button>      
                                             </td>
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

export default ViewExpense;
