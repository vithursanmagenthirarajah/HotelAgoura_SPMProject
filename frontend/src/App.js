import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import
//import Sample from "./Vithursan/sample.jsx"
// import AddFoodItem from "./Vithursan/AddFoodItem";
// import ViewFooditem from "./Vithursan/ViewFooditem";
import AddRoom from "./Jathusanan/AddRoom";
import ViewRoom from "./Jathusanan/ViewRoom";
import UpdateRoom from "./Jathusanan/UpdateRoom";
// import NavBar from "./Jathusanan/NavBar";
// import Footer from "./Jathusanan/Footer";
// import Home from "./Jathusanan/Home";
import AdminHeader from "./Jathusanan/AdminHeader";
import ViewStatus from "./Jathusanan/ViewStatus";

import AddFoodItem from './Vithursan/AddFoodItem';
import ViewFooditem from './Vithursan/ViewFooditem';
import FoodCard from './Vithursan/FoodCard';
import AdminDash from './Vithursan/AdminDash';
import UpdateFood from './Vithursan/UpdateFood';
import Navbar from './Vithursan/NavBar';
import Home from './Vithursan/Home';

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

            <Route path='/' exact={true} component={Home}/>
            <Route path='/Fdash' exact={true} component={AdminDash}/>
            <Route path='/add' exact={true} component={AddFoodItem}/>
            <Route path='/view' exact={true} component={ViewFooditem}/>
            <Route path='/card' exact={true} component={FoodCard}/>
            <Route path='/update/:id' exact={true} component={UpdateFood}/>

          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
