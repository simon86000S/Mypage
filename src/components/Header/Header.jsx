import React from 'react';
import image from'../assets/img/image.svg';

import Particles from "react-tsparticles";
import './Header.scss';

const Header = () => {
 
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    
    <div id="accueil" className='Header'>
      <Particles
     
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random:true,
          value:5,
        },
      },
      detectRetina: true,
    }}
  />
<div className='header-left'>

   <div className='wrapper-title'>
   
    <h2>Bonjour, je suisssss</h2>
<h1>Simon Audrain</h1>
   
   </div> 
   <div className='wrapper'>
   <div className='wrapper-left'>
     <div className='item-wrapper'>web developpeur</div>
     <div className='item-wrapper'>UI/UX Designer</div>
     <div className='item-wrapper'>NextJS</div>
     <div className='item-wrapper'>back-end Firebase</div>
     <div className='item-wrapper'>Concepteur plan 3D</div>
   </div>
   </div>

</div>
<div className='header-right'>
  <div className='bg-right'>
 
  </div>
  <img src= {image} alt='Image' />
  

</div>

    </div>
  )
}

export default Header