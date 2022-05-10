import React,{useEffect,useRef} from 'react';
import './Landing.scss';
import huitre from '../assets/img/huitre.jpg';
import react from '../assets/img/react.png';
import ordinateur from '../assets/img/ordinateur.jpg';
import pc from "../assets/img/pcc.png";
import html from "../assets/img/html.png"
import projet from '../assets/img/projet3.png';
import referencement from '../assets/img/reference.png';
import friend from "../assets/img/friend.png";
import roue from "../assets/img/roue.png";
import computer from '../assets/img/computer.jpg';
import backpc from '../assets/img/backpc.jpg'
import html5 from '../assets/img/HTML5.png';
import css3 from '../assets/img/css3.png';
import javascript from '../assets/img/javascript.png';
import node from '../assets/img/node.png';
import me from '../assets/img/me.jpg'
import Aos from 'aos';
import firebase from '../assets/img/firebase.png'

import 'aos/dist/aos.css';



const Landing = () => {

const span = useRef(null)
const span2 = useRef(null)
const span3=useRef(null)
const span4=useRef(null)
const span5=useRef(null)
const span6=useRef(null)

  useEffect(() => {
    Aos.init({
      duration:2000
    });
  span.current.style.width="95%";
  span.current.style.transition="2s ease-in";
  span2.current.style.width="96%";
  span2.current.style.transition="2s ease-in"
  span3.current.style.width="80%";
  span3.current.style.transition="2s ease-in"
  span4.current.style.width="50%";
  span4.current.style.transition="2s ease-in";
  span5.current.style.width="80%";
  span5.current.style.transition="2s ease-in";
  span6.current.style.width="80%";
  span6.current.style.transition="2s ease-in"
  
  
  


  }, [])
  
  return (
    <div className='Container'>
        <div className='container-projects'>
            <div className='Presentation'>

<div id="presentation" className='title'>
    <h1>Présentation</h1>
    <span></span>
    </div>
<div data-aos="fade-up"  className='i-description'>

<p><span>Developpeur Passionné</span> dans le domaine du web, j'étudie en tant que autodidacte plutot orienté Front-end, je tend à devenir <span>dévéloppeur Fullstack</span>, 
Je conçois des sites bénévolements, afin de me perfectionner. </p>


</div>

       
        
            </div>

        </div>
        <div className='projects-react' id='reactjs'>
          
            <div className='project1'>
            <div className='title-project'>
    <h1 data-aos="fade-up"  data-aos-duration="2000" id="travaux">Mes travaux<span></span></h1>
    
    <nav className='techno'>
      <ul className='nav-ul'>
      <li>
        <a href='#reactjs'>React js</a>
      </li>
      
        
      </ul>
    </nav>

    </div>
    <div className='grid-project'>
      


    <div class="parent">
    
<div class=" div div2"><a href="https://simon86000s.github.io/huitre-en-ligne/"><img src={huitre}></img ></a> </div>
<div class=" div div3"><img src={computer}></img> </div>
<div class=" div div4"><img src={computer}></img></div>
<div class=" div div5"><img src={ordinateur}></img> </div>
<div class=" div div6"><img src={ordinateur}></img> </div>



</div>


      

    </div>
            </div>
            


            
</div>



<div className='activity' id='activity'>
             <div className='activity-title'>
<h1>“Mesurer la progression du développement d’un logiciel à l’aune de ses lignes de code revient à mesurer la progression de la construction d’un avion à l’aune de son poids
— Bill Gates”  </h1>
             </div>


 
    
           
     

    </div>
    <div  className='gridService'>

   <div  className='services'>
    <div  className='service-text'> <img src={pc}></img>Multi-plateforme
   <p >Compatible sur tous supports, tablette, mobile</p> </div>
    
    <div className='service-text'  ><img src={html}></img>Devéloppement Web
 
    <p >Création de site vitrine</p></div>
    <div className='service-text'><img src={projet}></img>Projet Web
    <p >Création de site vitrine,Landing page,site e-commerce</p></div>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='service-text'><img  src={referencement}></img>Réferencement
    <p > Framework, code optimiser pour le reférencement naturel</p></div>
 
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000" className='service-text'  ><img style={{background:"grey"}}   src={friend}></img>Accompagnement
    <p >je gére l'integralité des projets en assurant une écoute permanente</p></div>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000" className='service-text'><img  src={roue}></img>Maintenance web
      <p >je maintient le site à jour en veillant à son bon fonctionnement  </p></div>

  </div>
  
    
    
    </div> 
    <div className='competence' id="competence">
      <div className='i'>
        <div className='i-left'><img src={backpc}></img></div>
        <div className='i-right'>
          <h1 data-aos='fade-up'>Compétences</h1>
         <div className='rod'>
           <div className='rod1'>
             <span ref={span}><img src={html5}/>HTML5<p>95%</p></span>

           </div>
           <div className='rod2'>
             <span ref={span2}><img src={css3}/>CSS3<p>96%</p></span>

           </div>
           <div className='rod3'>
             <span ref={span3}><img src={javascript}/>Javascript<p>80%</p></span>

           </div>
           <div className='rod4'>
             <span ref={span4}><img src={node}/>Node Js<p>50%</p></span>

           </div>
           <div className='rod5'>
             <span ref={span5}><img src={react}/>React JS<p>80%</p></span>

           </div>
           <div className='rod6'>
             <span ref={span6}><img src={firebase}/>Firebase<p>60%</p></span>

           </div>
           

           

         </div>
        
          </div>
      </div>

    </div>
    
    
    </div>
         
  
      
  )
}

export default Landing