import React from 'react';
import './Nav.scss';
import { useState } from 'react';
import { useRef } from 'react';




const Nav = () => {
 const menu = useRef(null)
const [showMenu, setMenu] = useState(false)

const ShowMenu=()=>{
 setMenu(true)
  

}

const hiddenMenu=()=>{
  setMenu(false)
   
 
 }
 

 

  return (
    <div  className='navigation'>
        <div onClick={ShowMenu}  className='burger'>
<span ></span>
<span></span>
<span></span>

</div>
      {showMenu && (<div>
        <div ref={menu}  className='menu'>
        <div className='nav-ul'>
            <h2>Audrain</h2>
          
           <ul>
           <span onClick={hiddenMenu}>X</span>
           <a  href="#accueil"><li>Accueil</li></a>
           <a href="#presentation"><li>Présentation</li></a>
              <a href="#travaux"><li>Réalisation</li></a> 
              <a href='#activity'><li>Activités</li></a>
               <a href="#competence"><li>Comptétences</li></a>
               <li>
        <a href='#Contact'>Contact</a>
      </li>
        
               <li>Mon CV</li>
               
               </ul> 


</div>

    </div>
       

      </div>)}
    

     
    
    
     </div>
  )
}

export default Nav