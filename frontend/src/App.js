import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import
//import Sample from "./Vithursan/sample.jsx"
import AddFoodItem from "./Vithursan/AddFoodItem";
import ViewFooditem from "./Vithursan/ViewFooditem";
import AddRoom from "./Jathusanan/AddRoom";
import ViewRoom from "./Jathusanan/ViewRoom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={ViewRoom} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
