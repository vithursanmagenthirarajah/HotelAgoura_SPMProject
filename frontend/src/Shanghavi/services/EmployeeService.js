import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/Employee";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/getemployees');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+ '/addemployee',employee);
        
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/getemployees/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/updateemployee/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/deleteemployee/' + employeeId);
    }
}

export default new EmployeeService()