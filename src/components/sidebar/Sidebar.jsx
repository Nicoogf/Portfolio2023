import React, { useState } from 'react' 
import "./sidebar.css" ;
import Logo from "../../assets/n.svg" ;

const Sidebar = () => {


  const [ toggle , showMenu] = useState( false ) ;
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>

          <a href="#home" className="nav__logo">
            <img src={ Logo } alt='' />
          </a>

          <nav className='nav'>
            <div className='nav__menu'>

              <ul className='nav__list'>

                <li className='nav__item'>
                  <a href="#home" className="nav__link"> 
                    <i className='icon-home' /> 
                  </a>
                </li>

                
                <li className='nav__item'>
                  <a href="#about" className="nav__link"> 
                    <i className='icon-user-following' /> 
                  </a>
                </li>

                <li className='nav__item'>
                  <a href="#services" className="nav__link"> 
                    <i className='icon-energy' /> 
                  </a>
                </li>

                <li className='nav__item'>
                  <a href="#resume" className="nav__link"> 
                    <i className='icon-graduation' /> 
                  </a>
                </li>

                <li className='nav__item'>
                  <a href="#portfolio" className="nav__link"> 
                    <i className='icon-briefcase' /> 
                  </a>
                </li>
               
                <li className='nav__item'>
                  <a href="#tecnologias" className="nav__link"> 
                    <i className='icon-layers' /> 
                  </a>
                </li>

                <li className='nav__item'>
                  <a href="#contact" className="nav__link"> 
                    <i className='icon-bubble' /> 
                  </a>
                </li>
                
              </ul>
              
            </div>

          </nav>

          <div className="nav__footer">
            <span className="copyright">&copy; 2023 - 2024. </span>
          </div>

       </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={ ()=>showMenu(!toggle)}>
          <i className="icon-menu"></i>
        </div>
    </>
  ) ;
} ;

export default Sidebar ; 