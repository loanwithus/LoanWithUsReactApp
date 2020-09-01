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
</div>

<div className="col-lg-6 order-1 order-lg-2 header-img" style={{marginRight: 3000 + 'em'}}>
    <img src={ web } className="img-fluid animated" alt="home img"/>
    </div>
    </div>
    </div>
</section>
)
}
}
export default Home