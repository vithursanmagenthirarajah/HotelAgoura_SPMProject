import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//import
//import Sample from "./Vithursan/sample.jsx"

function App() {
  return (
  <div className="App">
    <Router>
      <div className="container">
        <Switch> 
            <Route path='/' exact={true} component={}/>
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
 