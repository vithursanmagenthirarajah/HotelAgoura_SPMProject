import React, { Component } from 'react'
import ExpenseService from './services/ExpenseService';


class UpdateExpense extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            date: '',
            month:'',
            expensetype: '',
            amount: '',
            description: '',
           
        }

        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeMonthHandler = this.changeMonthHandler.bind(this);
        this.changeExpenseTypeHandler = this.changeExpenseTypeHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
    }

    componentDidMount(){
        ExpenseService.getExpenseById(this.state.id).then( (res) =>{
            let expense = res.data;
            this.setState({
                date: expense.date,
                month:expense.month,
                expensetype: expense.expensetype,
                amount: expense.amount,
                description: expense.description,
            });
        });
    }


    updateExpense = (e) => {
        e.preventDefault();
        let expense = {date: this.state.date,month: this.state.month, expensetype: this.state.expensetype,amount: this.state.amount,description: this.state.description};
        console.log('expense => ' + JSON.stringify(expense));
        console.log('id => ' + JSON.stringify(this.state.id));
        ExpenseService.updateExpense(expense, this.state.id).then( res => {
            this.props.history.push('/viewexpense');
        });
    }


    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changeMonthHandler= (event) => {
        this.setState({month: event.target.value});
    }
    changeExpenseTypeHandler= (event) => {
        this.setState({expensetype: event.target.value});
    }
    changeAmountHandler= (event) => {
        this.setState({amount: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
  
    cancel(){
        
        this.props.history.push('/viewexpense');
    }

  


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h4 className="text-center" style={{color:"#053b4b"}}>Update Employee Details</h4>
                                <div className = "card-body">
                                    <form>
                                
                           
                                        <div className = "form-group">
                                            <label>  Date </label>
                                            <input type="date" placeholder="Enter Date" name="date" className="form-control" 
                                            value={this.state.date} onChange={this.changeDateHandler} required={true}/>
                                         
                                        </div>
                                        <br></br>
                                     
                                        <div className = "form-group">
                                            <label>  Month </label>
                                            <select
                                                input type="text"  name="month" className="form-control"  
                                             value={this.state.month} onChange={this.changeMonthHandler} required={true}>
                                           

                                            <option >Choose ..</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                            </select>
              
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Expense Type</label>
                                            <input placeholder="Enter Expense Type" name="expensetype" className="form-control" 
                                                value={this.state.expensetype} onChange={this.changeExpenseTypeHandler} required={true}/>
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label> Amount </label>
                                            <input placeholder="Enter Amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeAmountHandler} required={true}/>
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label>Description </label>
                                            <input placeholder="Enter Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler} required={true}/>
                                        </div>
                                        <br></br>


                                        <button className="btn" onClick={this.updateExpense} style={{marginLeft: "250px",backgroundColor:"#0186ac", color:"white"}}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateExpense
