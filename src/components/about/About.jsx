import React from 'react' ;
import "./about.css" ;
import Image from "../../assets/image.png"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">

      <h2 className="section__title">   Acerca de Mi </h2>

      <div className='about__container grid'>

        <img src={ Image } alt="" className='about__img'/>
        
        <div className="about__data grid">

          <div className="about__info">

            <p className="about__description">
            Desarrollador Full-Stack con conocimientos sólidos en <span className='bold'>Javascript</span>   focalizado en crear soluciones digitales que se destaquen por su innovación y calidad. Con pasión por impulsar mi carrera profesional en el area de la programacion web
            </p>

            <a href="/Nicolas FalabellaCV.pdf" className="btn" download> Download CV</a>

          </div>

        

        </div>

      </div>

      <AboutBox />

    </section>
  ) ;
} ;

export default About ;
