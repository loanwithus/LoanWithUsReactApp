import React, { Component } from 'react';
import {useHistory } from "react-router-dom"; 
function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
class Contact extends Component{
    
    constructor(props) {
        super(props);
        this.state = {};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        
        const form = event.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state
          })
        })
          useHistory().push("/home");
       
          alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      };
    
      render() {
        return (
          <div>
            <h1>Contact</h1>
            <form
              name="contact"
              method="post"
              action="/home/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your name:<br />
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your email:<br />
                  <input type="email" name="email" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message:<br />
                  <textarea name="message" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        )
    }
}
export default Contact