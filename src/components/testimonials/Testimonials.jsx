import React from 'react' ;
import "./testimonials.css" ;
import Image1 from "../../assets/avatar-1.svg" ;
import Image2 from "../../assets/avatar-2.svg" ;
import Image3 from "../../assets/avatar-3.svg" ;

const data = [
  {
    id: 1 ,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer",
    comment : "comentario numero uno sobre la devolcuion del producto"
  },
  {
    id: 2 ,
    image: Image3,
    title: "John Doe",
    subtitle: "Product numero dos",
    comment : "comentario numero dos sobre la devolcuion del producto"
  },
  {
    id: 3 ,
    image: Image3,
    title: "John Doe",
    subtitle: "Product numero tres",
    comment : "comentario numero tres sobre la devolcuion del producto"
  },

];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className='section__title'> Clientes y Reviews </h2>

      <div className="testimonials__container grid">
        {data.map(( item )=>{
          return(
            <div className="testimonial__item" key={ item.id }>
              <div className="thumb">
                <img src={ item.image } alt=''/>
              </div>
              <h3 className='testimonials__title'> { item.title } </h3>
              <span className='subtitle'> { item.subtitle } </span>
              <div className="comment"> { item.comment } </div>
            </div>
          )
        })}
      </div>
    </section>
  ) ;
} ;

export default Testimonials ;
