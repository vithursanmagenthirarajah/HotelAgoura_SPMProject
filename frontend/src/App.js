import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import
//import Sample from "./Vithursan/sample.jsx"
import AddFoodItem from "./Vithursan/AddFoodItem";
import ViewFooditem from "./Vithursan/ViewFooditem";
import AddRoom from "./Jathusanan/AddRoom";
import ViewRoom from "./Jathusanan/ViewRoom";
import UpdateRoom from "./Jathusanan/UpdateRoom";
import NavBar from "./Jathusanan/NavBar";
import Footer from "./Jathusanan/Footer";
import Home from "./Jathusanan/Home";
import AdminHeader from "./Jathusanan/AdminHeader";
import ViewStatus from "./Jathusanan/ViewStatus";

function App() {
  return (
    <div className="App">
      <Router>
        <AdminHeader />
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={ViewRoom} />
            <Route path="/status" exact={true} component={ViewStatus} />
            <Route path="/update/:id" exact={true} component={UpdateRoom} />
            <Route path="/AddRoom" exact={true} component={AddRoom} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
