import React from 'react';
import { motion } from "framer-motion";
import { BottomToTop, LeftToRight, RightToLeft } from '../../components/animations/animations';
import "./services.scss";
import {  ServicesContainer, ServicesBg, ServicesImgHeader, ServicesImg, ServicesInfoSection,
          ServicesInfoContainer, ServicesInfoHeading, ServicesInfoImg, ServicesInfoText, ServicesHeader } from './ServicesElements';

import insp from '../../images/inspection.svg'
import main from '../../images/roofmaintenance.svg'
import rep from '../../images/roofrepair.svg'
import claim from '../../images/claims.svg'
import head from '../../images/ServicesBg.svg'





function Services({isOpen, toggle}) {


 


  return (
<>

<ServicesContainer id ={'services'}>
    <ServicesBg>

      <ServicesImgHeader style={{ backgroundImage:`url(${head})` }}>

      <ServicesHeader>OUR SERVICES</ServicesHeader>
      </ServicesImgHeader>
                
        
     
      <motion.div 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
          <motion.div variants={BottomToTop} >

          <ServicesInfoSection>
                    <ServicesInfoContainer>
                      <ServicesInfoImg  style={{ backgroundImage:`url(${main})` }}/>
                      <ServicesInfoHeading>Roofing Maintenance</ServicesInfoHeading>
                      <ServicesInfoText>Our goal is to expand the lifespan of your roof for as long as possible. 
                      Scheduling consistent inspections for your roof enables us to apply any regular maintenance
                       and repairs to avoid long term damage resulting in costly repairs. </ServicesInfoText>
                    </ServicesInfoContainer>

                    <ServicesInfoContainer>
                      <ServicesInfoImg  style={{ backgroundImage:`url(${rep})` }}/>
                      <ServicesInfoHeading>Roofing Repair & Replace</ServicesInfoHeading>
                      <ServicesInfoText>K & M uses state of the art roofing materials where we favor quality over quantity.
                       We specialize in replacing and repairing roofing for our loyal clients.</ServicesInfoText>
                    </ServicesInfoContainer>

                    <ServicesInfoContainer>
                      <ServicesInfoImg  style={{ backgroundImage:`url(${claim})` }}/>
                      <ServicesInfoHeading>Claims & Restoration</ServicesInfoHeading>
                      <ServicesInfoText>Roofing with K & M can help you process to restore your property after any 
                      sudden or unexpected damages through the insurance claims. </ServicesInfoText>
                    </ServicesInfoContainer>

                    <ServicesInfoContainer>
                      <ServicesInfoImg  style={{ backgroundImage:`url(${insp})` }}/>
                      <ServicesInfoHeading>Roof Inspections</ServicesInfoHeading>
                      <ServicesInfoText>Utilizing a comprehensive checklist along with versatile drones 
                      ensures you will receive immediate feedback on the state of your
                       roof for you to make informed decisions.</ServicesInfoText>
                    </ServicesInfoContainer>


          </ServicesInfoSection>
          </motion.div>
          </motion.div>

    </ServicesBg>

</ServicesContainer>
  
</>
    

  );
}
export default Services;