import React from 'react';
import AlexJenna from '../assets/images/alex-jenna.png';
import AlexJennaProfile from '../assets/svg/alex-jenna-profile.svg';
import WoodieBrandon from '../assets/images/woodie-brandon.png';
import WoodieBrandonProfile from '../assets/svg/woodie-brandon-profile.svg';
import VectorSvg from '../assets/svg/toRightVector.svg';

const BuyersGuide = () => {
  return (
    <>
    <div className="buyers-guide">
       
        <div className="buyers-guide-top">
            <span>BUYER'S GUIDES</span>
            <h3>Navigating our offering.</h3>
            <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
        </div>
        
        <div className="buyers-guide-bottom">
           
            <div className="guide-bottom-left">
                
                <div className="alex-jenna-image">
                    <img src={AlexJenna} alt="" />
                </div>
                
                <div className="images-title">
                    <span>3 climbing accessories for the climber that has everything</span>
                </div>
                
                <div className="alex-jenna-title">
                    
                    <div className="alex-jenna-profile">
                        <img src={AlexJennaProfile} alt="" />
                    </div>
                    
                    <div className="alex-jenna-name-tag">
                        <span>Alex Jenna </span>
                        <small>QA</small>
                    </div>
                    
                    <div className="alex-jenna-date">
                        <span>October 18, 2021</span>
                    </div>
                
                </div>
    
            </div>
            
            <div className="guide-bottom-right">
                
                <div className="woodie-brandon-image">
                    <img src={WoodieBrandon} alt="" />
                </div>
                
                <div className="images-title">
                    <span>Biking accessories for the beaten path</span>
                </div>
                
                <div className="woodie-brandon-title">
                    
                    <div className="woodie-brandon-profile">
                        <img src={WoodieBrandonProfile} alt="" />
                    </div>
                    
                    <div className="woodie-brandon-name-tag">
                        <span>Woodie Brandon</span>
                        <small>Product Designer</small>
                    </div>
                    
                    <div className="woodie-brandon-date">
                        <span>October 18, 2021</span>
                    </div>
                
                </div>
           
            </div>
        
        </div>

        <div className="buyer-guide-footer">
            <a href="#">Show all buyer's guides <img src={VectorSvg} alt="" /></a>
        </div>
    
    </div>
    
    
    </>
  )
}

export default BuyersGuide