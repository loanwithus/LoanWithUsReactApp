import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';

class Contactbar extends Component {

    render() {
    return (
        
        <Navbar bg="light" expand="lg" >
        <div className="level-left">
        <a href="tel:+91 999999999‬" target="_blank" rel="noopener noreferrer">+91 999999999‬</a></div>
        <div className="level-right">
        <a href="mailto:info@horizonfargo.com" target="_blank" rel="noopener noreferrer">xyz@email.com‬</a></div>
        </Navbar>

        )
    }
    
}
export default Contactbar
