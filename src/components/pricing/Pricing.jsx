import React from 'react' ;
import "./pricing.css" ;
import Image1 from "../../assets/price-1.svg" ;
import Image2 from "../../assets/price-2.svg" ;
import Image3 from "../../assets/price-3.svg" ;

const Pricing = () => {
  return (
   <section className="pricing container section">

    <h2 className='section__title'>Pricing Plans</h2>

    <div className="pricing__container grid">

      <div className="pricing__items">
        <img src={ Image1 } alt="" className='pricing__img' />
        <h3 className='pricing__plan'>estandar</h3>
        <p className='pricing__title'>diseño base</p>
        <p className='pricing__support'>diseño informativo</p>
        <h3 className='price'>
          <em>$</em> 5 <span> Month </span>
        </h3>
        <a href="#" className='btn'> Get started</a>
      </div>

      <div className="pricing__items best">
        <span className='badge'> Recommended </span>
        <img src={ Image2 } alt="" className='pricing__img' />
        <h3 className='pricing__plan'> Basic</h3>
        <p className='pricing__title'>Simple diseño de pagina web</p>
        <p className='pricing__support'>Soporte por mail</p>
        <h3 className='price'>
          <em>$</em> 9 <span> Month </span>
        </h3>
        <a href="#" className='btn'> Get started</a>
      </div>

      <div className="pricing__items">
        <img src={ Image3 } alt="" className='pricing__img' />
        <h3 className='pricing__plan'>Fullservice</h3>
        <p className='pricing__title'>servicio personalizado</p>
        <p className='pricing__support'> soprte 24hs</p>
        <h3 className='price'>
          <em>$</em> 12 <span> Month </span>
        </h3>
        <a href="#" className='btn'> Get started</a>
      </div>


    </div>

   </section>
  ) ;
} ;

export default Pricing ;