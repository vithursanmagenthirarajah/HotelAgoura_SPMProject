import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService'

class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }
    cancel(){
        
        this.props.history.push('/getemployees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h4 className = "text-center"style={{color:"#053b4b"}}> View Employee Details</h4>

                    <div className = "card-body">
                        <div className = "row">
                            <label>First Name : { this.state.employee.firstName }</label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Last Name :  { this.state.employee.lastName }</label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Date of birth : { this.state.employee.dob } </label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Contactno : { this.state.employee.contactno }</label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Email ID :  { this.state.employee.emailId }</label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Address : { this.state.employee.address }</label>
                            
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Position :  { this.state.employee.position}</label>
                           
                        </div>
                        <br></br>
                        <div className = "row">
                            <label>Department :   { this.state.employee.department}</label>
                          
                        </div>
                    </div>
                   
                </div>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "600px",width:"90px"}}>Cancel</button>
            </div>
        )
    }
}

export default ViewEmployee
