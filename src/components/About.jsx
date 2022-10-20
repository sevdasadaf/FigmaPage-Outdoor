import React from 'react';

import shape from '../assets/svg/shape.svg';
import aboutImg from '../assets/images/aboutUs.png';
import vector from '../assets/svg/toRightVector.svg';

const About = () => {
  return (
    <>
    <div className="aboutUs">
        
        <div className="shapes">
            <div className="firstShape"><img src={shape} alt="" /> </div>
            <div className="secondShape"><img src={shape} alt="" /> </div>
        </div>
        
        <div className="imageAbout">
            <img src={aboutImg} alt="" />
        </div>
        
        <div className="whoAreWe">
            <small>WHO ARE WE?</small>
            <span>A bit about us.</span>
            <p>We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</p>
            <a href="#">Read more <img className='vector' src={vector}  /> </a>
        </div>
    
    </div>
    
    
    
    
    </>
  )
}

export default About