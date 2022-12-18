import React, { useRef, useEffect, useState} from 'react';
import "./projects.scss";
import frame from '../../images/frame.svg'
import houseC from '../../images/houseC.svg'
import { motion } from "framer-motion";
import { BottomToTop, LeftToRight, RightToLeft } from '../../components/animations/animations';
import Carousel from "framer-motion-carousel";
import {
  ProjectsContainer,
  ProjectsBg,
  LeftBg,
  RightBg,
  ProjectHeaderSection,
  PHead,
  PHeadTop,
  PHeadLine,
  PCarouselCont,
  PCollageSection,
  PCollageBg,
  PCollLT,
  PCollRT,
  PCollLL,
  PButtonArea,
  Col1,
  Col2


  
} from './ProjectElements';

import  rbp  from '../../images/RightBgProjects.svg'
import  lbp  from '../../images/LeftBgProjects.svg'
import  lp  from '../../images/lp.svg'
import  rp from '../../images/rp.svg'
import  cb from '../../images/rubg.svg'
import  button from '../../images/Button.svg'


function Projects({isOpen, toggle}) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);
  const onHover = () => {
      setHover(!hover);
  }

  return (
    <ProjectsContainer id ={'projects'}>
      
      <ProjectsBg style={{ backgroundImage:`url(${rbp})` }} >

        <Col1>
              <LeftBg style={{ backgroundImage:`url(${lbp})` }}/>




              <ProjectHeaderSection>
                  <PHeadTop>FOUNDED IN MEMPHIS, TENNESSEE</PHeadTop>
                  <PHead>OUR PROJECTS</PHead>
                  <PHeadLine/>
              </ProjectHeaderSection>

              <PCarouselCont>
                    <Carousel>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <img
                      draggable="false"
                      src={`./carousel/${item}.jpeg`}
                      key={i}
                      width="100%"
                      alt=""
                    />
                  ))}
                </Carousel>

              </PCarouselCont>
        </Col1>



        <Col2>
           <PCollageSection>
                <PCollageBg style={{ backgroundImage:`url(${cb})` }}/>
            
                <PCollLT>(901) 501-5949</PCollLT>
                <PCollRT>CALL TODAY FOR A FREE QUOTE</PCollRT>
                <PCollLL/>
            </PCollageSection>
          <PButtonArea style={{ backgroundImage:`url(${button})`}}/>
        </Col2>
      </ProjectsBg>
    </ProjectsContainer>
  );
}
export default Projects;