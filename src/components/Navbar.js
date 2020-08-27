import React, { Component } from 'react';
import Navitem from './NavItem';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
class NavBar extends Component {

render() {
return (
/* <nav>
<ul>
<Navitem item="Home" tolink="/"  ></Navitem>
<Navitem item="About" tolink="/about"  ></Navitem>
<Navitem item="Contact" tolink="/contact" ></Navitem>
</ul>
</nav> */
<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">LoanWithUs</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link ><Navitem item="Home" tolink="/"  ></Navitem></Nav.Link>
    <Nav.Link ><Navitem item="About Us" tolink="/about"  ></Navitem></Nav.Link>
    <Nav.Link ><Navitem item="Contact Us" tolink="/contact"  ></Navitem></Nav.Link >
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Actionrr</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}
}
export default NavBar