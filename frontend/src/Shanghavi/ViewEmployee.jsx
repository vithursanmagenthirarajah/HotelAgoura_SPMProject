import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

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

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>First Name : </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label>Last Name : </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label>Date of birth : </label>
                            <div> { this.state.employee.dob }</div>
                        </div>
                        <div className = "row">
                            <label>Contactno : </label>
                            <div> { this.state.employee.contactno }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID : </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label>Address : </label>
                            <div> { this.state.employee.address }</div>
                        </div>
                        <div className = "row">
                            <label>Position : </label>
                            <div> { this.state.employee.position}</div>
                        </div>
                        <div className = "row">
                            <label>Department : </label>
                            <div> { this.state.employee.department}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployee
