import React from 'react' ;

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">198</h3>
                <span className="about_subtitle">Proyectos Completados</span>
            </div>

        </div>


        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">3</h3>
                <span className="about_subtitle">Certificados</span>
            </div>

        </div>


        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">89</h3>
                <span className="about_subtitle">Clientes Satisfechos</span>
            </div>

        </div>

        
        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">7</h3>
                <span className="about_subtitle">Libertadores</span>
            </div>

        </div>


    </div>
  ) ;
} ;

export default AboutBox ;