import React, { Component } from 'react';
import web from "../images/Vector_Back_To_The_Future_Car.svg";
import { NavLink } from 'react-router-dom';  

class Home extends Component {
    
render() {
    
return (
<section id="header" className="d-flex align-items-center flex-column">
<div className="container-fluid nav-bg">
<div className="row"></div>
<div className="col-10 mx-auto">
<div className="row">
    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
        <h1> Get fast Car Loan with <strong className="brand-name">LoanWithUs</strong></h1>
        <h2 className="my-3"> We offer fast loans</h2>
        <div className="mt-3"></div>
            <NavLink to="/contact" className="btn-get-started"> Get Started</NavLink>
    </div>


<div className="col-lg-6 order-1 order-lg-2 header-img" >
    <img src={ web } className="img-fluid animated" alt="home img" />
    </div>
    </div>
    </div>
    </div>
</section> 
/* <div>
<header>
<div className="view" style={{ backgroundImage:'url(https://mdbootstrap.com/img/Photos/Others/images/91.jpg)',
 backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
            
            <div className="mask rgba-gradient align-items-center">
             
              <div className="container">
              
                <div className="row mt-5">
                 
                  <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                    <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                    <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"></hr>
                    <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                    nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                    <a className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                  </div>
    
                  <div className="col-md-6 col-xl-5 mb-4">
                    
                    <div className="card wow fadeInRight" data-wow-delay="0.3s">
                      <div className="card-body">
                        
                        <div className="text-center">
                          <h3 className="white-text">
                            <i className="fas fa-user white-text"></i> Register:</h3>
                          <hr className="hr-light"></hr>
                        </div>
                        
                        <div className="md-form">
                          <i class="fas fa-user prefix white-text active"></i>
                          <input type="text" id="form3" className="white-text form-control"></input>
                          <label for="form3" className="active">Your name</label>
                        </div>
                        <div className="md-form">
                          <i className="fas fa-envelope prefix white-text active"></i>
                          <input type="email" id="form2" className="white-text form-control"></input>
                          <label for="form2" className="active">Your email</label>
                        </div>
                        <div className="md-form">
                          <i className="fas fa-lock prefix white-text active"></i>
                          <input type="password" id="form4" className="white-text form-control"></input>
                          <label for="form4">Your password</label>
                        </div>
                        <div className="text-center mt-4">
                          <button className="btn btn-indigo">Sign up</button>
                          <hr className="hr-light mb-3 mt-4"></hr>
                          <div className="inline-ul text-center">
                            <a className="p-2 m-2 tw-ic">
                              <i className="fab fa-twitter white-text"></i>
                            </a>
                            <a className="p-2 m-2 li-ic">
                              <i className="fab fa-linkedin-in white-text"> </i>
                            </a>
                            <a className="p-2 m-2 ins-ic">
                              <i className="fas fa-instagram white-text"> </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                 
                </div>
               
              </div>
             
            </div>
           
          </div>
          
        </header>
       
        
        <main>
          <div classNameName="container">
           
            <div classNameName="row py-5">
              
              <div classNameName="col-md-12 text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             
            </div>
            
          </div>
        </main>
        </div>
         */

)
}
}
export default Home