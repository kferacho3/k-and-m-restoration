import React, { useRef, useEffect, useState} from 'react';

import {
  TestimonialContainer, TestBg, Col1, Col2,  TestimonialH1, TestimonialH2, TestimonialSubH,
   LeftB, RightB, TestApost, TestStars, TestText, TestSvg, TestTextBot, TestTextWrap
  
} from './TestimonialsElements';
import { motion } from "framer-motion";
import { BottomToTop, LeftToRight, RightToLeft } from '../../components/animations/animations';


import left from '../../images/Left.svg'
import right from '../../images/Right.svg'
import apost from '../../images/Apost.svg'
import stars from '../../images/Stars.svg'
import test from '../../images/TestBg.svg'
import Carousel from "framer-motion-carousel";


const text = [
  
  "Great company, the contractor was so nice and helped through everything from the" +
  "insurance all the way to me helping pick out a shingle color, the roof turned out " +
  "amazing, also the owners were quite dapper men and also quite polite, overall great" +
  "company and great work",

  "They told me what needed to be done in a simple way and did it in a very timely manner. " +
  "Everyone was extremely kind and down to earth.",
    
  "It was a great experience working with the guys at K&M! After this past storm my roof shingles"+
  "suffered some pretty significant damage and a lot of shingles went missing and I was getting " +
  "offered some outrageous prices to replace it. However the guys at K&M reached out to me and not" +
  "only got me the best price but also the quickest installation time.",
  
  "Very fast and professional1 5 star service.",

  "Thank you K&M for the great job you did this summer with replacing my roof!"];

  const text2 = [
  
    "K. Hernandez",
  
    "O. Amro",
      
    "T. Halimah",
    
    "Z. Alqirm",
  
    "B. Worthy"];


function Testimonials({isOpen, toggle}) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);
  const onHover = () => {
      setHover(!hover);
  }

  


  return (
<>
    <TestimonialContainer id ={'testimonials'}>
    <TestimonialH1>TESTIMONIALS</TestimonialH1>
    <TestSvg style={{ backgroundImage:`url(${test})` }}/>
    <TestBg>
         
    <motion.div 
                initial={"onscreen"}
                whileInView={"offscreen"}
                viewport={{once:true, amount:0.5}}
                transition={{staggerChildren:0.5}}
            >
          <motion.div variants={LeftToRight} >

                <Col1>  
              
                  
                    <TestimonialH2>Exceptional service is what we provide.</TestimonialH2>
                    <TestimonialSubH>Just hear from our clients!</TestimonialSubH>
                    <LeftB style={{ backgroundImage:`url(${left})` }}/>
                    <RightB style={{ backgroundImage:`url(${right})` }}/>
           
                </Col1>
                </motion.div>
          </motion.div>

      

          <motion.div 
                initial={"onscreen"}
                whileInView={"offscreen"}
                viewport={{once:true, amount:0.5}}
                transition={{staggerChildren:0.5}}
            >
          <motion.div variants={RightToLeft} >
              <Col2>
       
              
                  <TestApost style={{ backgroundImage:`url(${apost})` }}/>
              
                    
                  <TestTextWrap>
                      <Carousel autoPlay={false}>
                                {text.map((item, i) => (
                                  <TestText style={{ zIndex:`${-i}` }}>
                                    {text[i]}
                                      <TestTextBot>
                                          {text2[i]}
                                      </TestTextBot>
                                      <TestStars style={{ backgroundImage:`url(${stars})` }}/>
                                  </TestText>
                                ))}
                      </Carousel>
                  </TestTextWrap>

                    
              </Col2>

              </motion.div>
          </motion.div>
              
   

</TestBg>

    </TestimonialContainer>
</>
  );
}
export default Testimonials;