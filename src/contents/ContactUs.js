import React, { Component } from 'react'; 

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
class Contact extends Component{
    
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
      handleChange = e => this.setState({ [e.target.name]: e.target.value });
      
    
   
      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
    
      render() {
        const { name, email, message } = this.state;
        return (
          
             <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        
        )
    }
}

export default Contact