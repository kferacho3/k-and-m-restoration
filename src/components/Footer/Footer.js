import React, { useState}  from 'react'
import { FaDiscord, FaInstagram, FaTwitter , FaYoutube} from 'react-icons/fa';

import { animateScroll as scroll} from 'react-scroll';
import "./Footer.scss";
import { 
    FooterContainer,
    FooterG1,
    FooterG2,
    FooterText,
    FooterLinksContainer,
    FooterLinkTitle,
    FooterIcon,
    FooterLinksWrapper

   
  } from './FooterElements';


import g1 from '../../images/Green1.svg'
import g2 from '../../images/Green2.svg'
import icon from '../../images/Footer.svg'




const Footer = () => {

   
 
    
    const handleClick1 = () => {
        window.open("https://www.facebook.com/kmrenovations2020");
      };


      //handles timed popup by eliminating raapid popup (useeffect helps)
      


    return (
        <FooterContainer  >

         <FooterG1  style={{ backgroundImage:`url(${g1})` }}/>
         
            <FooterG2  style={{ backgroundImage:`url(${g2})` }}/>
            <FooterIcon to='/' style={{ backgroundImage:`url(${icon})` }}/>
          
            <FooterLinksContainer>
            <FooterLinkTitle> Quick Links </FooterLinkTitle>
            <FooterLinksWrapper>
                        <FooterText to='about'>About Us</FooterText>
                        <FooterText to='services'>Our Services</FooterText>
                        <FooterText to='projects'>Our Projects</FooterText>
                        <FooterText to='testimonials'>Testimonials</FooterText>  
                        <FooterText to='contact'>Contact Us!</FooterText> 
                        </FooterLinksWrapper> 
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer;



