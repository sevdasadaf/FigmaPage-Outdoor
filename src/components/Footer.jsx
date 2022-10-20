import React from 'react';

import LogoSvg from '../assets/svg/outdoor-svg.svg';
import LinkedIn from '../assets/svg/linkedIn.svg';
import Facebook from '../assets/svg/facebook.svg';
import Instagram from '../assets/svg/instagram.svg';
import Twitter from '../assets/svg/twitter.svg';

const Footer = () => {
  return (
    <>
    <div className="footer">
        
        <div className="logo-header">
            <img src={LogoSvg} alt="" />
        </div>
        
        <div className="footer-bottom">
            
            <div className="bottom-left-side">
                
                <div className="footer-links">
                    <div className='pages'>
                        <span>Pages</span>
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#">Categories</a>
                        <a href="#">Buyer's guides</a>
                        <a href="#">404</a>
                        <a href="#">Password</a>
                    </div>
                    <div className='gear'>
                        <span>Gear categories</span>
                        <a href="#">Hiking Gear</a>
                        <a href="#">Climbing Gear</a>
                        <a href="#">Jackets</a>
                        <a href="#">Accessories</a>
                        <a href="#">Apparel</a>
                        <a href="#">Headwear</a>
                    </div>
                    <div className='company'>
                        <span>Company</span>
                        <a href="#">About us</a>
                        <a href="#">Our team</a>
                        <a href="#">Contact</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Style guide</a>
                        <a href="#">Licenses</a>
                    </div>
                </div>
                
                <div className="outdoor-llc">
                    <p>© Outdoor Exploration, LLC. All rights reserved. Powered by Webflow</p>
                </div>
            
            </div>
            
            <div className="bottom-right-side">
                
                <div className="newsletter">
                    <span>Newsletter</span>
                    <p>Subscribe to our (infrequent) newsletter where we share news about upcoming listings and projects.</p>
                    <span className='email-input'><input type="email" placeholder='Email' /> <button>Submit</button> </span>
                </div>
                
                <div className="social-icons">
                    <img src={LinkedIn} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />

                </div>
            
            </div>

        </div>
    </div>
    
    
    </>
  )
}

export default Footer