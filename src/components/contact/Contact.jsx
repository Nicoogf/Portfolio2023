import React from 'react' ;
import "./contact.css" ;

const Contact = () => {
  return (
    <section className='contact container section' id="contact">
      <h2 className='section__title'> Get in Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title"> Lets talk about </h3>
          <p className='contact__details'> dont like forms? send me an email</p>
        </div>

        <form action="" className='contact__form'>
          <div className='contact__form-group'>

            <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder='Insert Your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className='contact__form-input' placeholder='Insert Your Email' />
            </div>

          </div>

          <div className="contact__form-div">
              <input type="text" className='contact__form-input' placeholder='Insert Your subjetc' />
          </div>

          <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder="Write your mensaje"></textarea>
          </div>

          <button className='btn'> Send Message</button>

        </form>

      </div>
    </section>
  ) ;
} ;

export default Contact ;