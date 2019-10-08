import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavbar from './Components/MyNavbar';
import Footer from "./Components/Footer";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';


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
        <Route exact path="/contact" component={ContactPage}/> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
