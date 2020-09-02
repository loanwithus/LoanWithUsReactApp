import React, { Component } from 'react';

class Contactbar extends Component {

    render() {
    return (
        
        <div>
        <nav class="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src="logo.png" width="30" height="30" alt="hff" loading="lazy"></img>
    </a>
    </nav>
        <div className="level-left" style={{textAlign:'right'}}>
        <a href="tel:+91 999999999‬" target="_blank" rel="noopener noreferrer">+91 999999999‬</a></div>
        <div className="level-right">
        <a href="mailto:xyz@email.com" target="_blank" rel="noopener noreferrer">xyz@email.com‬</a></div>
        </div>

        )
    }
    
}
export default Contactbar
