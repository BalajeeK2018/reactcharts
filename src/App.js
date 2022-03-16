import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
       
       
                 <Home />
             
      </div>
    </Router>
    );
  }
}

export default App;
