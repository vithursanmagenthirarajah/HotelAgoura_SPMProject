import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//import
//import Sample from "./Vithursan/sample.jsx"
import AddFoodItem from './Vithursan/AddFoodItem';
import AddVenue from './Praveen/AddVenue';
import ViewVenues from './Praveen/ViewVenues';
import UpdateVenue from './Praveen/UpdateVenue';
import Navbar from './Praveen/Navbar';



function App() {
  return (
  <div className="App">
    <Router>
      <Navbar/>
      <div className="container">
        <Switch> 
            <Route path='/' exact={true} component={AddFoodItem}/>
            <Route path='/addVenue' component={AddVenue}/>
            <Route path='/venues' component={ViewVenues}/>
            <Route path='/updateVenue/:id' component={UpdateVenue}/>
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
 