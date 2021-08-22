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

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <NavBar />

          <Switch>
            <Route path="/" exact={true} component={ViewRoom} />
            <Route path="/update/:id" exact={true} component={UpdateRoom} />
          </Switch>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
