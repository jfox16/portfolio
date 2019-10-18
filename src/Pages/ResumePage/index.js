import React, { Component } from 'react';

// Import css
import "./ResumePage.css";

class ResumePage extends Component {
  render() {
    return (
    <div className="mainDiv">
      <div className="innerDiv" style={{backgroundColor:"white", padding:"10px"}}>
        <h1>My Resume</h1>
        <div style={{height:"10px"}}/>
        <h2>Work Experience</h2>
        <p>Software Engineer Intern at Olixus Inc. (Jun 2017 - Sep 2017)</p>
        <h2>Skills</h2>
        <p>Unity, C#, React, JS, Java, Python, JS, React, HTML, CSS, Git </p>
      </div>
    </div>
    );
  }
}

export default ResumePage;
