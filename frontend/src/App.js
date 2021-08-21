import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//import
//import Sample from "./Vithursan/sample.jsx"
import AddFoodItem from './Vithursan/AddFoodItem';
import ViewFooditem from './Vithursan/ViewFooditem';
import FoodCard from './Vithursan/FoodCard';
import AdminDash from './Vithursan/AdminDash';
import UpdateFood from './Vithursan/UpdateFood';
function App() {
  return (
  <div className="App">
    <Router>
      <div className="container">
        <Switch> 
            <Route path='/' exact={true} component={AdminDash}/>
            <Route path='/add' exact={true} component={AddFoodItem}/>
            <Route path='/view' exact={true} component={ViewFooditem}/>
            <Route path='/card' exact={true} component={FoodCard}/>
            <Route path='/update' exact={true} component={UpdateFood}/>
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
 