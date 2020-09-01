import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
<div className="container-fluid nav-bg">
<div className="row"></div>
<div className="col-10 mx-auto"></div>
 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid"></div>
<NavLink className="navbar-brand" to="/contact" >LoanWithUs</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"  className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active"  className="nav-link" to="/service">Services</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
</div>
)
}
}
export default NavBar