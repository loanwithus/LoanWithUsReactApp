import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Contactbar extends Component {

    render() {
    return (
        
        <div>
        <nav class="navbar navbar-light bg-light">
        <NavLink className="navbar-brand" to="/About">
    <img src="https://user-images.githubusercontent.com/69192600/92033063-b1a5f500-ed88-11ea-8e39-1cd6e33653e8.png" width="90" height="90" alt="hff" loading="lazy"></img>
    </NavLink>
         <span class="navbar-text">
         <button type="button" className="btn btn-outline-dark"><a href="tel:+91 999999999‬" target="_blank" rel="noopener noreferrer">Call Us: +91 999999999‬</a></button>
         <button type="button" className="btn btn-outline-dark"><a href="mailto:xyz@email.com" target="_blank" rel="noopener noreferrer"> &nbsp; Email: xyz@email.com‬</a></button>
        </span>
        </nav>
       

        </div>

        )
    }
    
}
export default Contactbar
