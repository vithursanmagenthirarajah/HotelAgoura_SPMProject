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
import firebase_image from "./Jathusanan/fileUpload";
import roombook from "./Jathusanan/Sprint2/RoomBooking";

//Shanghavi
import EmployeeList from "./Shanghavi/EmployeeList";
import CreateEmployee from "./Shanghavi/CreateEmployee";
import UpdateEmployee from "./Shanghavi/UpdateEmployee";
import ViewEmployee from "./Shanghavi/ViewEmployee";

//Vithursan
import ViewFooditem from "./Vithursan/ViewFooditem";
import FoodCard from "./Vithursan/FoodCard";
import AdminDash from "./Vithursan/AdminDash";
import UpdateFood from "./Vithursan/UpdateFood";
import Home from "./Vithursan/Home";
import AddFoodItem from "./Vithursan/AddFoodItem";

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
            <Route path="/Fdash" exact={true} component={AdminDash} />
            <Route path="/add" exact={true} component={AddFoodItem} />
            <Route path="/view" exact={true} component={ViewFooditem} />
            <Route path="/card" exact={true} component={FoodCard} />
            <Route path="/fupdate/:id" exact={true} component={UpdateFood} />

            <Route path="/getemployees" component={EmployeeList}></Route>
            <Route path="/addemployee/:id" component={CreateEmployee}></Route>
            <Route
              path="/updateemployee/:id"
              component={UpdateEmployee}
            ></Route>
            <Route path="/viewemployee/:id" component={ViewEmployee}></Route>

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
