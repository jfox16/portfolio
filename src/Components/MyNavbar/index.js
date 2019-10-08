import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { foxIcon } from "../../Images"

class MyNavbar extends Component {
  render() {
    return (
      <div style={{backgroundColor:"white"}}>
        <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">
            <img src={foxIcon} alt="" style={{height:"30px", marginRight:"10px"}}/>
            J. Fox
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Item>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Games</NavDropdown.Item>
                  <NavDropdown.Item href="/">Web Apps</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;