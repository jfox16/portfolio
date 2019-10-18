import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavbar from './Components/MyNavbar';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';


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
      <Router basename={process.env.PUBLIC_URL}>
        <MyNavbar />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/resume" component={ResumePage}/>
      </Router>
    </div>
  );
}

export default App;
