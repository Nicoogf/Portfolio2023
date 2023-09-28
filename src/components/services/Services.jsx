import React from 'react' ;
import "./services.css" ;
import Image1 from "../../assets/Responsive.svg";
import Image2 from "../../assets/Codigo.svg";
import Image3 from "../../assets/SPA.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Responsive Design",
    description : "Diseño de sitios web adaptados a diferentes dispositivos y tamaños de pantalla"
  },

  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description : "Creacion y mantenimiento de sitios o aplicaciones web"
  },

  {
    id: 3,
    image: Image3,
    title: "Single Page Application",
    description : "Aplicaciónes con componentes reactivos"
  }
]

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title"> Conocimiento en </h2>

      <div className="services__container grid">
        { data.map(( item ) => {
          return(
            <div className="services__card" key={ item.id }>
              <img src={ item.image } alt="" className="services__img" />

              <h3 className='services__title'> { item.title } </h3>
              <p className='services__description'> { item.description } </p>
            </div>
          ) ;
        })}
      </div>
    </section> 
  ) ;
} ;

export default Services ;