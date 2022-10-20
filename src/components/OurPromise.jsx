import React from 'react'
import SustainableSvg from '../assets/svg/sustainable.svg';
import LifeTime from '../assets/svg/lifetime.svg';
import AllTerrain from '../assets/svg/allTerrain.svg';
import Premium from '../assets/svg/premium.svg';
import Design from '../assets/svg/design.svg';
import Quality from '../assets/svg/quality.svg';
import ShapeTop from '../assets/svg/shapeTop.svg';
import ShapeBottom from '../assets/svg/shapeBottom.svg';



const OurPromise = () => {
  return (
    <>
    <div className="ourPromise">
          
          <div className="shape-top">
             <img className='shapeTopRight' src={ShapeTop} alt="" />
          </div>
           
          <div className="ourProducts">
            <small>OUR PROMISE</small>
            <h2>Setting the bar for our products.</h2>
            <p className='our-promise-text' >Morbi neque ex, condimentum dapibus congue et, vulputate ut  ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi  ultrices, ut faucibus orci tincidunt.</p>
          </div>
          
          <div className="productsTop">
             
             <div className="sustainable products-modifier">
                 <img src={SustainableSvg} alt="" />
                 <h4>Sustainable sourcing</h4>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
             </div>
             
             <div className="lifetime products-modifier">
                 <img src={LifeTime} alt="" />
                 <h4>Lifetime warranty</h4>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
             </div>
             
             <div className="tested products-modifier">
                  <img src={AllTerrain} alt="" />
                  <h4>All-terrain tested</h4>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
             </div>
        
          </div>
          
          <div className="productsBottom">
             <div className="premium products-modifier">
              <img src={Premium} alt="" />
              <h4>Premium materials</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
             </div>
             
             <div className="designed products-modifier">
              <img src={Design} alt="" />
              <h4>Designed by you</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
             </div>
             
             <div className="quality products-modifier">
              <img src={Quality} alt="" />
              <h4>Quality assured</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</span>
             </div>
    
          </div>
          
          <div className="shape-bottom"> 
            <img src={ShapeBottom} alt="" />
          </div>
         
    </div>
    </>
  )
}

export default OurPromise