import React from 'react' ;
import "./home.css" ; 
import { BsWhatsapp , BsInstagram , BsGithub , BsDiscord} from "react-icons/bs" ;
import { BiLogoGmail } from "react-icons/bi" ;

const HeaderSocials = () => {
  return (
   <div className="home__socials">

        <a href="https://api.whatsapp.com/send?phone=5492324584106" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
        </a>

        <a href="https://www.instagram.com/nfalabella_/" className="home__social-link" target="_blank" rel="noopener noreferrer">
             <BsInstagram />
        </a>

        <a href="mailto:nicolasgfalabella@gmail.com" className="home__social-link" target="_blank" rel="noopener noreferrer">
             <BiLogoGmail />
        </a>

        <a href="https://github.com/Nicoogf" className="home__social-link" target="_blank" rel="noopener noreferrer">
             <BsGithub />
        </a>
      

        <a href="https://discordapp.com/users/693586473894805535" className="home__social-link" target="_blank" rel="noopener noreferrer">
            <BsDiscord />
        </a>

   </div>
  ) ;
} ;

export default HeaderSocials ;