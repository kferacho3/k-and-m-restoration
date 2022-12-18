
import React, { Component, useEffect } from 'react'

import { 
  HeroContainer, HeroBg, HeroMessage, HeroMTop, HName, HEmail, 
  HMessage, HPhone, HButton, VideoBg, HeroHeader
     } from './HeroElements';

import logo from '../../images/TenesseeLogo.svg';
import vid from '../../videos/HeroBg.mp4';



     function Hero({isOpen, toggle}) {


 


        return (
                <HeroContainer id ={'home'}>
                    <HeroBg>
                      <HeroHeader> Your Residential Roofing Contractors in Tennessee! </HeroHeader>
                      <HeroMessage>
                          <HeroMTop>Schedule your Free Inspection</HeroMTop>
                          <HName type="text" placeholder="*Name"/>
                          <HPhone type="text" placeholder="*Phone"/>
                          <HEmail type="text" placeholder="*Email"/>
                          <HMessage type="text" placeholder="*Message"/>



                      </HeroMessage>

                      <HButton>REQUEST FREE QUOTE →</HButton>

                    </HeroBg>
                    <VideoBg autoPlay loop muted playsinline src={vid} type='video/mp4'/>
                </HeroContainer>
        
    
          
      
        );
      }
      export default Hero;




