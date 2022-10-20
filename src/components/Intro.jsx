import React from 'react';

import introImg from '../assets/images/intro.png';

const Intro = () => {
  return (
    <>
    <div className="intro">
        <img src={introImg} alt="" />
        <p>
            <span className='first'>OUTDOOR EXPLORATION</span>
            <span className='second'>Gear for when it <br /> actually matters.</span>
            <span className='third'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</span>
        </p>
    </div>
    </>
  )
}

export default Intro