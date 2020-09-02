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
              <div>
             <form onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label for="formGroupExampleInput">Your Name:</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} class="form-control" id="formGroupExampleInput" placeholder="Name"></input>
              </div>
  
        
            
            <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

     <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
       <textarea className="form-control" name="message" value={message} onChange={this.handleChange}  id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
        <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        )
    }
}

export default Contact