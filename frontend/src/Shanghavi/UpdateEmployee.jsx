import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            dob: '',
            contactno: '',
            emailId: '',
            address:'',
            position: '',
            department:'',
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changedobHandler = this.changedobHandler.bind(this);
        this.changecontactnoHandler = this.changecontactnoHandler.bind(this);
        this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
        this.changeaddressHandler = this.changeaddressHandler.bind(this);
        this.changepositionHandler = this.changepositionHandler.bind(this);
        this.changedepartmentHandler = this.changedepartmentHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                dob: employee.dob,
                contactno: employee.contactno,
                emailId: employee.lastName,
                address: employee.address,
                position: employee.position,
                department: employee.department,
            });
        });
    }


    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName,dob: this.state.dob,contactno: this.state.contactno, emailId: this.state.emailId,address: this.state.address,position: this.state.position,department: this.state.department};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/getemployees');
        });
    }


    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changedobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changecontactnoHandler= (event) => {
        this.setState({contactno: event.target.value});
    }

    changeemailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeaddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changepositionHandler= (event) => {
        this.setState({position: event.target.value});
    }
    changedepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }


    cancel(){
        this.props.history.push('/getmployees');
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Date of birth</label>
                                            <input placeholder="date of birth" name="date of birth" className="form-control" 
                                                value={this.state.dob} onChange={this.changedobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact Number </label>
                                            <input placeholder="Contact Number" name="Contact Number" className="form-control" 
                                                value={this.state.contactno} onChange={this.changecontactnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address </label>
                                            <input placeholder="Address" name="Address" className="form-control" 
                                                value={this.state.address} onChange={this.changeaddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Position </label>
                                            <input placeholder="Position" name="Position" className="form-control" 
                                                value={this.state.position} onChange={this.changepositionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Department </label>
                                            <input placeholder="Department" name="Department" className="form-control" 
                                                value={this.state.department} onChange={this.changedepartmentHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
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

export default UpdateEmployeeComponent
