import React from 'react' ;
import "./blog.css" ;
import Image1 from "../../assets/blog-1.svg" ;
import Image2 from "../../assets/blog-2.svg" ;
import Image3 from "../../assets/blog-3.svg" ;


const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className='section__title'> ultimos posteos</h2>
      
      <div className='blog__container grid'>

        <div className="blog__card">
          <div className='blog__thumb'>
            <a href='#'> <span className='blog__category'> Reviews </span></a>
            <a href='#'> <img src={ Image1 } alt="" className='blog__img'/> </a>
          </div>
          <div className="blog__details">
            <h3 className='blog__title'> 5 Best app development tool</h3>
            <div className='blog__meta'>
              <span> 09 February , 2022</span>
              <span className='blog-dot'> . </span>
              <span> Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className='blog__thumb'>
            <a href='#'> <span className='blog__category'>Tutorial</span></a>
            <a href='#'> <img src={ Image2 } alt="" className='blog__img'/> </a>
          </div>
          <div className="blog__details">
            <h3 className='blog__title'> Aplicacion finance lemon</h3>
            <div className='blog__meta'>
              <span> 10 February 2023</span>
              <span className='blog-dot'> . </span>
              <span> Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className='blog__thumb'>
            <a href='#'> <span className='blog__category'>Go page!</span></a>
            <a href='#'> <img src={ Image1 } alt="" className='blog__img'/> </a>
          </div>
          <div className="blog__details">
            <h3 className='blog__title'> Curso de Programacion</h3>
            <div className='blog__meta'>
              <span> 12 febrero 2023
              </span>
              <span className='blog-dot'> . </span>
              <span> Bolby</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  ) ;
} ;

export default Blog ;