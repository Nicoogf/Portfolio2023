import React from 'react' ;
import "./home.css" ;
import Me from "../../assets/profile.jpg" ;
import HeaderSocials from './HeaderSocials' ;
import ScrollDown from './ScrollDown' ;
import Shapes from "./Shapes" ;



const Home = () => {
  return (
    <section className='home container' id="home"> 
      <div className='intro'>
        <img className='home__img' src={ Me } alt=""/>
        <h1 className='home__name'>Nicolas Falabella</h1>
        <span className='home__education'> Full Stack Developer</span>

        <HeaderSocials />

        <a href="#contact" className='btn'> Contactame</a>

        <ScrollDown />
        
      </div>
      <Shapes />
    </section>
  ) ;
} ;

export default Home ;