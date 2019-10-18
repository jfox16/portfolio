import React, { Component } from 'react';
import { Tabs, Tab, Nav } from "react-bootstrap";

// Import my components
import Projects from "../../Components/Projects";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";

// Import project data
import gamesJson from "../../Data/games.json";
import webappsJson from "../../Data/webapps.json"

// Import css
import "./HomePage.css";

import { jonPic } from "../../Images/";
import { resume } from "../../Data/jfox-resume.pdf";

class HomePage extends Component {
  render() {
    return (
    <div className="mainDiv">

      <Banner />
      
      <div className="innerDiv">
        <Tab.Container defaultActiveKey="games">
          <div className="whiteBg">
            {/* <h1>Projects</h1> */}
            <div>
              <img className="portrait" src={jonPic} alt="It's me!" />
              <h2>I'm a programmer. I create value for people through the things I build. Whether I'm making a game or a website, my top priority is creating a positive experience for the user. Below are some projects that I'm especially proud of. Click on a project to learn more!</h2>
            </div>
            <Nav variant="pills" className="projectsNav" color="danger">  
              <Nav.Item>
                <Nav.Link eventKey="games" className="NavLink">Games</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="webapps" className="NavLink">Web Apps</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="projectsContent">
            <Tab.Pane eventKey="games">
              <Projects projects={gamesJson} />
            </Tab.Pane>
            <Tab.Pane eventKey="webapps">
              <Projects projects={webappsJson} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      
      <Footer />
    </div>
    );
  }
}

export default HomePage;
