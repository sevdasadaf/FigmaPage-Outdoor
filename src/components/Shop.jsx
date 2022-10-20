import React from 'react';
import Basket from '../assets/svg/basket.svg';
import Photos from '../assets/svg/photo-icon.svg';
import Person from '../assets/svg/person.svg';
import Telegram from '../assets/svg/telegram.svg';
import Background from '../assets/images/background.png';
import Shape from '../assets/images/Combined-Shape.png'







const Shop = () => {
  return (
    <>
    <div className="shop">
       
       <div className="shop-top">
        
        <div className="shop-top-background">
         <img src={Background} alt="" />
        </div>
        
        <div className="shop-buttons">
            <button> <img src={Basket} alt="" /> First Aid Kit</button>
            <button>Banger Bottle</button>
            <button> <img src={Photos} alt="" /> Brian Schultz</button>
            <button> <img src={Person} alt="" /> Leah Stoff</button>
            <button> <img src={Telegram} alt="" /> Catalina, California</button>
        </div>
      
       </div>

       <div className="shop-bottom">
         <span>Shop</span>
         <h3>Check out our products.</h3>
         <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
         <button>Visit shop</button>
         <div className="background-shape">
          <img src={Shape} alt="" />
         </div>
       </div>

    </div>
    </>
  )
}

export default Shop