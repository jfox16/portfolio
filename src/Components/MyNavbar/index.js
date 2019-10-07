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
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/p/games">Games</NavDropdown.Item>
                <NavDropdown.Item href="/p/web">Web</NavDropdown.Item>
                <NavDropdown.Item href="/p/other">Other</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;