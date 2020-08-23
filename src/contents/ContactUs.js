import React, { Component } from 'react';
class Contact extends Component{
    render(){
        return(
            <form name="contact" method="POST" data-netlify="true" action="?">
            <label>
            Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}
export default Contact