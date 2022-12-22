

import React, { useRef, useEffect, useState} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'

import { PopIn, BottomToTop } from '../components/animations/animations';
import {
GalWrap,
GalleryContainer,
GalleryHeading,
GalleryCard,
GalleryTitle,
GalleryInfo,
GalleryPrice,
GalleryDesc,
GalleryImg,
GalleryButton,
GalleryWrapper,
GalleryHContainer,
GalleryHBG,
GalleryH1,
GalleryH2,
GalleryLogo


  
} from './GalleryElements';

import galh from './gallery/GalHead.svg';
import cbg from './gallery/HeadCBG.svg';
import logo from './gallery/GalLogo.svg';
import GoBack from '../components/GoBack/GoBack';


function Gallery ({ heading, data })  {
  const { scrollY } = useScroll()

  return (
    <>
      <GoBack/>
      
          <GalleryHContainer style={{ backgroundImage:`url(${cbg})` }}>
          <motion.div 
        initial={"onscreen"}
        whileInView={"offscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
          <motion.div variants={BottomToTop} >
              <GalleryHBG style={{ backgroundImage:`url(${galh})` }} >
                  <GalleryH1>A closer look at</GalleryH1>
                  <GalleryH2>OUR PROJECTS</GalleryH2>
                  <GalleryLogo style={{ backgroundImage:`url(${logo})` }} />
              </GalleryHBG>
              </motion.div>
      </motion.div>
          </GalleryHContainer>
   


    <GalleryContainer id ={'/gallery'}>
      <GalleryHeading>{heading}</GalleryHeading>
      <GalleryWrapper>
        {data.map((roof, index) => {
          return (
            <GalleryCard key={index}>
            <motion.div 
        initial={"onscreen"}
        whileInView={"offscreen"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
          <motion.div variants={PopIn} >
              <GalleryImg src={roof.img} alt={roof.alt} />
              </motion.div>
              </motion.div>
              <GalleryInfo>
                <GalleryTitle>{roof.name}</GalleryTitle>
                <GalleryDesc>{roof.desc}</GalleryDesc>
                <GalleryPrice></GalleryPrice>
              </GalleryInfo>
            </GalleryCard>
          );
        })}
      </GalleryWrapper>
    </GalleryContainer>
  
    </>
  );
}
export default Gallery;