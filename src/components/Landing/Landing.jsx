import React from 'react';
import './Landing.scss';
import huitre from '../assets/img/huitre.jpg';
import react from '../assets/img/reactjs.png';
import ordinateur from '../assets/img/ordinateur.jpg';

const Landing = () => {
  return (
    <div className='Container'>
        <div className='container-projects'>
            <div className='Presentation'>

<div id="presentation" className='title'>
    <h1>Présentation</h1>
    <span></span>
    </div>
<div className='i-description'>
<p><span>Developpeur Passionné</span> dans le domaine du web,j'étudie en tant que autodidacte plutot orienté Front-end, je tend à devenir <span>dévéloppeur Fullstack</span>, 
Je conçoit des sites bénévolements, afin de me perfectionner. </p>

</div>

       
        
            </div>

        </div>
        <div className='projects-react' id='reactjs'>
          
            <div className='project1'>
            <div className='title-project'>
    <h1 id="travaux">Mes travaux</h1>
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
    
<div class="div2"><a href="https://simon86000s.github.io/huitre-en-ligne/"><img src={huitre}></img ></a> </div>
<div class="div3"><img src={ordinateur}></img> </div>
<div class="div4"><img src={ordinateur}></img></div>
<div class="div5"><img src={ordinateur}></img> </div>
<div class="div6"><img src={ordinateur}></img> </div>
<div class="div7"><img src={ordinateur}></img> </div>
<div class="div8"><img src={ordinateur}></img> </div>
<div class="div9"><img src={ordinateur}></img> </div>
<div class="div10"><img src={ordinateur}></img></div>
<div class="div11"><img src={ordinateur}></img> </div>


</div>


      



    </div>
            </div>


            
</div>


<div className='activity'>
             <div className='activity-title'>
<h1>“Mesurer la progression du développement d’un logiciel à l’aune de ses lignes de code revient à mesurer la progression de la construction d’un avion à l’aune de son poids
— Bill Gates”  </h1>
             </div>


 
    
           
     

    </div>
    <div className='gridService'>
   <div className='services'>
    <div style={{background:"green"}}>lkdksjd</div>
    <div  style={{background:"red"}}>kldjskdjslkd</div>
    <div  style={{background:"yellow"}} >skdj:sdjklsj</div>
    <div>skdj:sdjklsj</div>
    <div>skdj:sdjklsj</div>
    <div>skdj:sdjklsj</div>

  </div>
    
    </div> 
            </div>
  
      
  )
}

export default Landing