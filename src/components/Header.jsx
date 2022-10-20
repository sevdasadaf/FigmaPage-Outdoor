import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import logo from '../assets/svg/outdoor-logo.png';
import basketSvg from '../assets/svg/basket.svg';


const Header = () => {
  
    return (
    <>
    <div className="header">
        <div className="logo">
            <img  src= {logo} alt="outdoor exploration" />
        </div>
        
        <div className="navss">
        <nav class="navbar navbar-expand-sm ">
        <button type='button' class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
         <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse linkss" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
             <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Our team</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Buyer's guides</a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Categories</a>
            </li>
          </ul>
        </div>
        </nav>
        </div>
        
        <div className="header-buttons">
            <button>Buy template</button>
            <button><img src={basketSvg} alt="" /> Cart <span>0</span></button>
        </div>
    
    </div>
    
    </>

  )
}

export default Header