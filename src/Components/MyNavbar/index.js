import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { foxIcon } from "../../Images";
import { resume } from "../../Data/jfox-resume.pdf";



class MyNavbar extends Component {

  render() {

    const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

    const homeRef = (isDev) ? '/' : '/portfolio';

    return (
      <div style={{backgroundColor:"white"}}>
        <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="md">
          <Navbar.Brand href={homeRef}>
            <img src={foxIcon} alt="" style={{height:"30px", marginRight:"10px"}}/>
            J. Fox
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/resume">Resume</Nav.Link>
              </Nav.Item>
              <Nav.Item>  
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Games</NavDropdown.Item>
                  <NavDropdown.Item href="/">Web Apps</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;