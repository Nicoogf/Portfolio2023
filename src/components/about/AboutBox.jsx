import React from 'react' ;

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-grid"></i>

            <div>
                <h3 className="about__title">20</h3>
                <span className="about__subtitle">Proyectos</span>
            </div>

        </div>


        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about__subtitle">Certificados Oficiales</span>
            </div>

        </div>

        
        <div className="about__box">
            <i className="about__icon icon-calendar"></i>

            <div>
                <h3 className="about__title">1</h3>
                <span className="about__subtitle">Año de Experiencia</span>
            </div>

        </div>


    </div>
  ) ;
} ;

export default AboutBox ;