import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//import
//import Sample from "./Vithursan/sample.jsx"
import AddFoodItem from './Vithursan/AddFoodItem';
// import ViewFooditem from './Vithursan/ViewFooditem';
import EmployeeList from './Shanghavi/EmployeeList';
import CreateEmployee from './Shanghavi/CreateEmployee';
import UpdateEmployee from './Shanghavi/UpdateEmployee';
import ViewEmployee from './Shanghavi/ViewEmployee';
import FooterComponent from './Shanghavi/FooterComponent';

import Navbar from './Shanghavi/Navbar';
import Home from './Shanghavi/home';



function App() {
  return (
  <div className="App">
    <Router>
    < Navbar/>
      <div className="container">
        <Switch> 
         
    
            <Route path='/' exact={true} component={Home}/>
            <Route path = "/home" component = {Home}></Route>
            <Route path = "/addfood" component = {AddFoodItem}></Route>
            <Route path = "/getemployees" component = {EmployeeList}></Route>
            <Route path = "/addemployee/:id" component = {CreateEmployee}></Route>
            <Route path = "/updateemployee/:id" component = {UpdateEmployee}></Route>
            <Route path = "/viewemployee/:id" component = {ViewEmployee}></Route>
            
            
      
        </Switch>
      </div>
 <FooterComponent/>
    </Router>
  
  </div>
  );
}

export default App;
 