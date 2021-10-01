import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//praveen
import AddVenue from "./Praveen/AddVenue";
import ViewVenues from "./Praveen/ViewVenues";
import UpdateVenue from "./Praveen/UpdateVenue";

//Jathusanan
import AddRoom from "./Jathusanan/AddRoom";
import ViewRoom from "./Jathusanan/ViewRoom";
import UpdateRoom from "./Jathusanan/UpdateRoom";
import AdminHeader from "./Jathusanan/AdminHeader";
import ViewStatus from "./Jathusanan/ViewStatus";


//Shanghavi
import EmployeeList from './Shanghavi/EmployeeList';
import CreateEmployee from './Shanghavi/CreateEmployee';
import UpdateEmployee from './Shanghavi/UpdateEmployee';
import ViewEmployee from './Shanghavi/ViewEmployee';
import ViewExpense from './Shanghavi/ViewExpense';
import AddExpense from './Shanghavi/AddExpense';
import UpdateExpense from "./Shanghavi/UpdateExpense";
import Reviewexpense from "./Shanghavi/Expensereport";

// import Login from "./Shanghavi/Login/login.component";
// import Register from "./Shanghavi/Login/register.component";
// import Profile from "./Shanghavi/Login/profile.component";

//Vithursan
import ViewFooditem from "./Vithursan/ViewFooditem";
import FoodCard from './Vithursan/FoodCard';
import AdminDash from './Vithursan/AdminDash';
import UpdateFood from './Vithursan/UpdateFood';
import Home from './Vithursan/Home';
import AddFoodItem from './Vithursan/AddFoodItem';
import VenueDisplay from "./Praveen/VenueDisplay";
import VenueBooking from "./Praveen/VenueBooking";
import FinalizeReservation from "./Praveen/FinalizeReservation";
import OrderForm from "./Vithursan/OrderForm";
import ViewOrder from "./Vithursan/ViewOrder";
import StripeButton from "./Vithursan/stripebutton.component";
import PrintThisComponent from "./Vithursan/Print";

import SearchResult from "./Shanghavi/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <AdminHeader />
        
        
        <div className="container">
          <Switch>
            <Route path="/visual" exact={true} component={ViewRoom} />
            <Route path="/status" exact={true} component={ViewStatus} />
            <Route path="/update/:id" exact={true} component={UpdateRoom} />
            <Route path="/AddRoom" exact={true} component={AddRoom} />

         
            <Route path="/" exact={true} component={Home} />
            <Route path='/Fdash' exact={true} component={AdminDash}/>
            <Route path='/add' exact={true} component={AddFoodItem}/>
            <Route path='/view' exact={true} component={ViewFooditem}/>
            <Route path='/card' exact={true} component={FoodCard}/>
            <Route path='/fupdate/:id' exact={true} component={UpdateFood}/>
            <Route path='/order/:id' exact={true} component={OrderForm}/>
            <Route path='/vieworder' exact={true} component={ViewOrder}/>
            <Route path = "/Stripebutton" exact component = {StripeButton}/>
            

    
  
            <Route path = "/getemployees" component = {EmployeeList}/>
            <Route path = "/addemployee/:id" component = {CreateEmployee}/>
            <Route path = "/updateemployee/:id" component = {UpdateEmployee}/>
            <Route path = "/viewemployee/:id" component = {ViewEmployee}/>
            <Route path='/viewexpense'  component={ViewExpense}/>
            <Route path='/addexpense/:id'  component={AddExpense}/>
            <Route path = "/updateexpense/:id" component = {UpdateExpense}/>
            <Route path='/reviewexpense'  component={Reviewexpense}/>
            <Route path = '/search' component = {SearchResult}/>
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          */}



           
            <Route path='/addVenue' component={AddVenue}/>
            <Route path='/venues' component={ViewVenues}/>
            <Route path='/updateVenue/:id' component={UpdateVenue}/>
            <Route path='/viewVenues' component={VenueDisplay}/>
            <Route path='/viewVenue/:id' component={VenueBooking}/>
            <Route path='/finalizeHall/:id' component={FinalizeReservation}/>
           

            <Route path="/addVenue" component={AddVenue} />
            <Route path="/venues" component={ViewVenues} />
            <Route path="/updateVenue/:id" component={UpdateVenue} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
