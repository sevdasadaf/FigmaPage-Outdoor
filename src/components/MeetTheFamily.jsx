import React from 'react'

import Vector from '../assets/svg/toRightVector.svg';
import Accessories from '../assets/images/Accessories.png';
import Apparel from '../assets/images/Apparel.png';
import Climbing from '../assets/images/Climbing.png';
import Headwear from '../assets/images/Headwear.png';
import Hiking from '../assets/images/Hiking.png';
import Jackets from '../assets/images/Jackets.png';

const MeetTheFamily = () => {
  return (
    <>
    <div className="meet-the-family">
            
            <div className="family">
                <small>MEET THE FAMILY</small>
                <h2>What we have in store for you.</h2>
                <p className='family-text'>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
            </div>
              
            <div className='family-top'>
            
             <div className='accessories cards-modifier'>
                <img src={Accessories} alt="" />
                <h3>Accessories</h3>
                <span>Accessories you didn't know you needed.</span>
                <a href="#">View Accessories <img src={Vector} /></a>
             </div>
            
            <div className='apparel cards-modifier'>
                <img className='radius' src={Apparel} alt="" />
                <h3>Apparel</h3>
                <span>Check out our line of non-hiking clothes.</span>
                <a href="#">View Apparel <img src={Vector} /></a>
            </div>
            
            <div className= ' climbing cards-modifier'>
                <img className='radius' src={Climbing} alt="" />
                <h3>Climbing Gear</h3>
                <span>Climbing gear for every occasion.</span>
                <a href="#">View Climbing Gear <img src={Vector} /> </a>
            </div>
            
            </div>
            
            <div className='family-bottom'>
            
             <div className='headwear cards-modifier'>
                <img src={Headwear} alt="" />
                <h3>Headwear</h3>
                <span>Our beanies are so comfy you won't believe it.</span>
                <a href="#">View Headwear <img src={Vector} /> </a>
             </div>
            
            <div className='hiking cards-modifier'>
                <img src={Hiking} alt="" />
                <h3>Hiking Gear</h3>
                <span>Desert or mountain? Doesn't matter.</span>
                <a href="#">View Hiking Gear <img src={Vector} /></a>
            </div>
            
            <div className='jackets cards-modifier'>
                <img src={Jackets} alt="" />
                <h3>Jackets</h3>
                <span>Our jackets are perfect for every season.</span>
                <a href="#">View Jackets <img src={Vector} /></a>
            </div>
            
            </div>
            
            <div className="family-footer">
              <a href="#">Show all categories <img src={Vector} alt="" /></a>
            </div> 
   
   </div>
    
    
    </>
  )
}

export default MeetTheFamily