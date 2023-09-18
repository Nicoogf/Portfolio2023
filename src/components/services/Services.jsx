import React from 'react' ;
import "./services.css" ;
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI / UX Design",
    description : "Lorem bla bla abla bal abla abla abla ablaablabal"
  },

  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description : "Lorem bla bla abla bal abla abla abla ablaablabal"
  },

  {
    id: 3,
    image: Image3,
    title: "Photography",
    description : "Lorem bla bla abla bal abla abla abla ablaablabal"
  }
]

const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title"> Services </h2>

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