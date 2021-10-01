import React, { Component } from 'react'

import EmployeeService from './services/EmployeeService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {

            confirmAlert({
                title: 'Delete Employee',
                message: 'Are you sure you want to delete this Employee Details?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})

                  },
                  {
                    label: 'No',
                    onClick: () =>this.props.history.push('/getemployees')
                  }
                ]
              });
            
            
        });
    }

    viewEmployee(id){
        this.props.history.push(`/viewemployee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/updateemployee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/addemployee/_add');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                 <h2 className="text-center" style={{ color:"#053b4b"}}>Employee List</h2>
                 <br></br>
                 <br></br>
                 <div className = "row">
                    
                <button className="btn" onClick={this.addEmployee} style={{width:"230px",height:"40px",backgroundColor:"#034d67",color:"white",fontSize:"18px"}}> Add Employee Details</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table  className = "table table-striped table-bordered ">

                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>DOB</th>
                                    <th>Contact no</th>
                                    <th>Email Id</th>
                                    <th>Address</th>
                                    <th>Position</th>
                                    <th>Department</th>
                                    <th className="text-center">Actions</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                               
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.dob}</td>
                                             <td> {employee.contactno}</td>
                                             <td> {employee.emailId}</td>
                                             <td> {employee.address}</td>
                                             <td> {employee.position}</td>
                                             <td> {employee.department}</td>
                                             <td>
                                                 <button style={{marginLeft: "50px" }}onClick={ () => this.editEmployee(employee.id)} className="btn btn-info" >Update </button>
                                                 <button style={{marginLeft: "15px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "15px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
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

export default EmployeeList
