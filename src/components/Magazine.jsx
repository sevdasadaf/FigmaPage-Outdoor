import React from 'react';

import MagazinePhoto from '../assets/images/magazine.png';
import VectorSvg from '../assets/svg/toRightVector.svg';
import ShapeReading from '../assets/svg/shape-reading.svg';
import ShapeMagazine from '../assets/svg/shape-reading.svg';

const Magazine = () => {
  return (
    <>
     <div className="magazine">
       
        <div className="magazine-shapes">
            <div className="shape-reading"><img src={ShapeReading} alt="" /> </div>
            <div className="shape-magazine"><img src={ShapeMagazine} alt="" /> </div>
        </div>
        
        <div className="image-magazine">
            <img src={MagazinePhoto} alt="" />
        </div>
        
        <div className="magazine-reading">
            <small>SOME LIGHT READING</small>
            <span>Subscribe to our magazine today.</span>
            <p>We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</p>
            <a href="#">Read more <img className='vector' src={VectorSvg}  /> </a>
        </div>
    
    </div>
    </>
  )
}

export default Magazine