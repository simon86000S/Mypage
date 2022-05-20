import React from 'react'
import "../Footer/footer.scss";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import{FaLinkedin} from 'react-icons/fa';
import {IoLogoGithub} from 'react-icons/io';
import { Link } from 'react-router-dom';



const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_d1yt6t8', e.target, 'bxaPur0z2DPOPzdi7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='footer' id="Contact">
      <div className='section'>
        <div>
          <h1>Démarrons un projet ensemble,n'hésitez pas contacter moi</h1>
        </div>
        <form  onSubmit={sendEmail} ref={form}>
          <div  className='Form'>
            
            <input type="text" placeholder='Nom' name='name'></input>

            <div>
              
              <input type="email" placeholder='Adresse e-mail' name='email'></input>
              </div>
              <div>
             
              <textarea type="text" rows="10" cols="450" placeholder='Votre message' name='message'></textarea>
              
              
              </div>
              <input className='submit' type="submit" value='Envoyer'></input>
             <div>
               <h1 className='title-contact'>Me contacter</h1></div> 


          </div>
        </form>

      </div>
      <div className='social'>
        <div className='item-social'>
       <a href='https://www.facebook.com/simon.sder.9'> <FaFacebookSquare style={{height:"30px",width:'25px',marginRight:"12px"}} ></FaFacebookSquare></a>
        <a href='https://www.linkedin.com/in/simon-audrain-21627622a/'><FaLinkedin  style={{height:"30px",width:'25px',marginRight:"12px"}} ></FaLinkedin></a>
       <a href='https://github.com/simon86000S'> <IoLogoGithub style={{height:"30px",width:'25px'}}></IoLogoGithub></a>
        </div>
    

      </div>
    </div>
  )
}

export default Footer