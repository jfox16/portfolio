import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './Pages/HomePage'
import MyNavbar from './Components/MyNavbar'

/* 
################################################
  This is my website. It's where I keep track 
            of things I've worked on!
           Please take a look around!
################################################
*/

function App() {
  return (
    <div className="App">
      <div className="background" style={{backgroundColor:"peachpuff"}}/>
      <Router>
        <MyNavbar />
        <Route exact path="/" component={HomePage}/>
      </Router>
    </div>
  );
}

export default App;
