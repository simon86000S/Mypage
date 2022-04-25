import React from 'react'
import "../Footer/footer.scss";

const Footer = () => {
  return (
    <div className='footer' id="Contact">
      <div className='section'>
        <div>
          <h1>Démarrons un projet ensemble,n'hésitez pas contacter moi</h1>
        </div>
        <form>
          <div className='Form'>
            
            <input type="text" placeholder='Nom'></input>

            <div>
              
              <input type="email" placeholder='Adresse e-mail'></input>
              </div>
              <div>
             
              <textarea type="text" rows="10" cols="450" placeholder='Votre message'></textarea>
              </div>
             <div>
               <h1 className='title-contact'>Me contacter</h1></div> 


          </div>
        </form>

      </div>
      <div className='social'>

      </div>
    </div>
  )
}

export default Footer