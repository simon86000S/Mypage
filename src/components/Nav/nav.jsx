import React from 'react';
import './nav.scss';

const nav = () => {
  return (
    <div className='navigation'>

     <div className='menu'>
        <div className='nav-ul'>
            <h2>Audrain</h2>
           <ul>
           <a href="#accueil"><li>Accueil</li></a>
           <a href="#presentation"><li>Présentation</li></a>
              <a href="#travaux"><li>Réalisation</li></a> 
               <li>Activités</li>
               <li>Comptétences</li>
               <li>Contact</li>
               <li>Mon CV</li>
               
               </ul> 


</div>

    </div>
     </div>
  )
}

export default nav