import React, { Component } from 'react';
import Navitem from './NavItem';
class Navbar extends Component {

render() {
return (
<nav>
<ul>
<Navitem item="Home" tolink="/"  ></Navitem>
<Navitem item="About" tolink="/about"  ></Navitem>
<Navitem item="Contact" tolink="/contact" ></Navitem>
</ul>
</nav>
)
}
}
export default Navbar