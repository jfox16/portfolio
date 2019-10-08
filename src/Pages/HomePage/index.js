import React, { Component } from 'react';
import { Tabs, Tab, Nav } from "react-bootstrap";

// Import my components
import Projects from "../../Components/Projects";
import Banner from "../../Components/Banner";

// Import project data
import gamesJson from "../../Data/games.json";
import webappsJson from "../../Data/webapps.json"

// Import class
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
    <div className="mainDiv">

      <Banner />
      
      <div className="innerDiv">
        <Tab.Container defaultActiveKey="games">
          <div className="whiteBg">
            <h1>Projects</h1>
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
      
    </div>
    );
  }
}

export default HomePage;
