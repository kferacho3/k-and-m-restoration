import React, { useRef, useEffect, useState} from 'react';
//import Video from '../../videos/HBG3.mp4';
import "./about.scss";
import { 
  AboutContainer,
  AboutBG,
  AboutImgContainer,
  AboutTextSection,
  AboutTextTop,
  AboutHSide,
  AboutTextHeader,
  AboutText,
  AboutTextContainer,
  AboutSvg,
  AboutImg,
  AboutRightBg
  
} from './AboutElements';
import { motion } from "framer-motion";
import { BottomToTop, LeftToRight, RightToLeft, PopIn } from '../../components/animations/animations';

import bg from '../../images/AboutUs.svg';
import svg from '../../images/AboutSvg.svg';
import arbg from '../../images/AboutRightBg.svg';

function About({isOpen, toggle}) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);
  const onHover = () => {
      setHover(!hover);
  }



  



  return (
 
    
    <AboutContainer id= 'about' >

      <AboutBG >
          <AboutImgContainer >


              
                    <AboutImg  style = {{ backgroundImage: `url(${bg})`}}/>
              

              </AboutImgContainer>


                  <AboutTextSection>
                    <AboutRightBg style = {{ backgroundImage: `url(${arbg})`}}/>


                      <AboutTextContainer>
                      
                          <motion.div initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}} transition={{staggerChildren:0.5}}>
                          <motion.div variants={LeftToRight} >
                              <AboutTextTop>We Are Committed To Provide</AboutTextTop>
                            </motion.div>
                          </motion.div>

                          <motion.div initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}} transition={{staggerChildren:0.5}}>
                            <motion.div variants={BottomToTop} >
                              <AboutHSide/>
                            </motion.div>
                          </motion.div>

                          <motion.div initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}} transition={{staggerChildren:0.5}}>
                            <motion.div variants={RightToLeft} >
                                <AboutTextHeader>High Quality Roofing Services</AboutTextHeader>
                            </motion.div>
                          </motion.div>
                      
                          <motion.div initial={"onscreen"} whileInView={"offscreen"} viewport={{once:true, amount:0.5}} transition={{staggerChildren:0.5}}>
                <motion.div variants={PopIn} >
                        <AboutText>
                                      K & M Roofing is a Licensed, bonded, and insured storm damage restoration company servicing the homes within the mid-south!
                                      We provide Free storm damage assessment. A trained storm damage inspector will come to inspect your roof free of charge and let 
                                      you know what kind of damage you have on your roof and if it is in need of repair or replacement. 
                                      Our vetted team strives for quality work
                                      <AboutSvg  style = {{ backgroundImage: `url(${svg})`}}/> 
                        </AboutText>
                          </motion.div>
              </motion.div>
                    </AboutTextContainer>

          </AboutTextSection>
      </AboutBG>
    
    </AboutContainer>
    
  );
}
export default About;