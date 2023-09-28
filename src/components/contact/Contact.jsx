import React from 'react' ;
import "./contact.css" ;

import { useRef } from 'react' ;
import emailjs from 'emailjs-com';

const Contact = () => {

  const form =useRef () ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oq0cbon', 'template_lg3g9qs', form.current, 'BjjMTn9xEt7p26HyT')
    
    e.target.reset();
    alert("Mensaje Enviado")
    
  };

  return (
    <section className='contact container section' id="contact">
      <h2 className='section__title'> Contacto</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title"> No dudes en consultar </h3>
          <p className='contact__details'> Envia tu propuesta por Mail </p>
        </div>

        <form ref={ form } onSubmit={ sendEmail } className='contact__form'>
          <div className='contact__form-group'>

            <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder='Ingrese su nombre' name='name' />
            </div>

            <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder='Asunto' name='subject'/>
            </div>

          </div>

          <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder='Ingrese su mail' name='email' />
          </div>

          <div className="contact__form-div contact__form-area">
              <textarea id="" cols="30" rows="10" className='contact__form-input' placeholder="Ingrese su mensaje" name="message"></textarea>
          </div>

          <button className='btn' type='submit'>Enviar </button>

        </form>

      </div>
    </section>
  ) ;
} ;

export default Contact ;