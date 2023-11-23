import React from 'react' ;
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import "./testimonials.css" ;

import html from "../../assets/html.jpg" ;
import css from "../../assets/css.jpg" ;
import js from "../../assets/js.jpg" ;
import tailwind from "../../assets/tailwind.jpg" ;
import boostrap from "../../assets/boostrap.jpg" ;
import node from "../../assets/node.jpg" ;
import express from "../../assets/express.jpg" ;
import ejs from "../../assets/ejs.jpg" ;
import api from "../../assets/api.jpg" ;
import react from "../../assets/react.jpg";
import next from "../../assets/next.jpg" ;
import motion from "../../assets/motion.jpg" ;


const data = [
  {
    id: 1 ,
    image: html,
    title: "HTML",
    subtitle: "Stack Inicial",
  },

  {
    id: 2 ,
    image: css,
    title: "CSS",
    subtitle: "Stack Inicial",
  },

  {
    id: 3 ,
    image: js,
    title: "Javascript",
    subtitle: "Stack Inicial",
  },

  {
    id: 3 ,
    image: tailwind,
    title: "Tailwind",
    subtitle: "Framework de Css",
  },

  {
    id: 3 ,
    image: boostrap,
    title: "Boostrap",
    subtitle: "Framework de Css",
  },

  {
    id: 3 ,
    image: node,
    title: "NodeJs",
    subtitle: "Entorno de ejecución",
  },

  {
    id: 3 ,
    image: express,
    title: "Express",
    subtitle: "Framework Backend",
  },

  
  {
    id: 3 ,
    image: ejs,
    title: "EJS",
    subtitle: "Motor de vistas",
  },

  {
    id: 3 ,
    image: api,
    title: "Api",
    subtitle: "Consumo de Apis propias y de terceros",
  },

  {
    id: 3 ,
    image: react,
    title: "ReactJs",
    subtitle: "Librería Frontend",
  },

  {
    id: 3 ,
    image: next,
    title: "NextJs",
    subtitle: "Marco web de desarrollo front-end ",
  },

  {
    id: 3 ,
    image: motion,
    title: "Framer Motion",
    subtitle: "Animaciones en interfaces",
  },
 
 

];

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="tecnologias">
      <h2 className='section__title'> Tecnologias </h2>

      <Swiper className="testimonials__container grid" 
               modules={[ Pagination ]}
               spaceBetween={30}
               slidesPerView={3}
               loop={ true }
               grabCursor={true }            
               >
              

        {data.map(( item )=>{
          return(
            <SwiperSlide className="testimonial__item" key={ item.id }>
              <div className="thumb">
                <img src={ item.image } alt='' className='testimonial__img'/>
              </div>
              <h3 className='testimonials__title'> { item.title } </h3>
              <span className='subtitle'> { item.subtitle } </span>             
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  ) ;
} ;

export default Testimonials ;
