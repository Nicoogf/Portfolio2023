import React, { useState } from 'react';
import "./portfolio.css" ;
import Menu from "./Menu" ;

const Portfolio = () => {

  const [ items , setItems ] = useState( Menu ) ;
  const filterItem = ( categoryItem ) => {
    const updatedItems = Menu.filter((curElem) =>{
      return curElem.category === categoryItem ;
    })
    setItems( updatedItems ) ;
  }

  return (
    <section className='work container section' id="portfolio">
      <h2 className='section__title'> Ultimos Trabajos </h2>

      <div className="work__filters">

        <span className='work__items'  onClick={ () => setItems( Menu ) }>Ver todo</span>
        <span className='work__items'  onClick={ () => filterItem("Diseño")}>Diseños</span>
        <span className='work__items'  onClick={ () => filterItem("App")}>Apps</span>
        <span className='work__items'  onClick={ () => filterItem("Clon")}>Clones</span>
  
      </div>

      <div className="work__container grid">
        { items.map ((elem)=>{
            const { id , image , title , category , descripcion , link} = elem ;
            return(
              <div className='work__card' key={ id }>
                <div className="work__thumbnail">
                  <img src={ image } alt="" className='work__img'/> 
                  <div className='work__mask'></div>
                </div> 

                <span className='work__category'> { category } </span> 
                <h3 className='work__title'> { title } </h3>
                <p className='work__descripcion'> { descripcion } </p>
                <a href={ link } className="work__button" id="" target= "_blank"  rel="noreferrer">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
            )
        })}
      </div>
    </section>
  ) ;
} ;

export default Portfolio ;