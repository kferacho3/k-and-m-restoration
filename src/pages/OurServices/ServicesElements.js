import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { motion } from 'framer-motion';


export const ServicesContainer = styled.div`
    justify-content: center;
    align-items: center;
  
    height: 1200px;
    width: 100vw;
    border-radius: 0px;
    position: relative;
    left: 0px;
    right: 0px;
    background: #fff;

    
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
    }
    @media screen and (max-width: 1250px) {
       
        height: 1200px;
    }

    @media screen and (max-width: 950px) {
     
    }
    @media screen and (max-width: 550px) {
     
    }
 
`;

export const ServicesImgHeader = styled.div`
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    height: 630px;
    width: 980px;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    border-radius: 0px;
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;
    }
  
  @media screen and (max-width: 500px) {
      zoom: 0.5;
    }
  
`;

export const ServicesHeader = styled.h1`
    position: absolute;
    width: 477px;
    height: 212px;
    left: 500px;
    top: -50px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 56px;
    /* or 78% */

    display: flex;
    align-items: center;

    color: #FFFFFF;



`

export const ServicesImg = styled.div`
    position: absolute;
    height: 630px;
    border-radius: 0px;
    width: 981px;
    height: 628.1px;
 
    top: -37px;

  
`;

export const ServicesInfoSection = styled.div`
    position: absolute;
    display: grid;
    align-items: center;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;

    top: 680px;
    height: 500px;
    left: 50%;
    transform: translateX(-50%) scale(0.9);
    
   
    //transform: scale(0.7);
  
  

  @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        top: 900px;
        zoom: 0.8;
        grid-template-columns: 1fr 1fr;
    }
  
  @media screen and (max-width: 850px) {
      zoom: 0.6;
    }
    @media screen and (max-width: 500px) {

        zoom: 0.5;
    }

`

export const ServicesInfoContainer = styled.div`
    position: relative;
    height: 423px;
    width: 374px;
   
    top: 0px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.9);
    background-color: #e4e7d8;

   
    //transform: scale(0.7);
    
  


`


export const ServicesInfoImg = styled.img`
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    width: 240px;
    height: 220px;
    left: 50%;
    transform: translateX(-50%) ;
    top: 10px;
    
   
    //transform: scale(0.7);


`

export const ServicesInfoHeading = styled.h2`
    position: absolute;
    width: 240px;
    height: 25px;

    top: 215px;
    white-space: nowrap;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    /* or 110% */

    left: 50%;
    transform: translateX(-50%) ;
    align-items: center;
    text-align: center;

    color: #8B9F2C;
    

   
    //transform: scale(0.7);
  
 

`

export const ServicesInfoText = styled.div`
    position: absolute;
    width: 310px;
    height: 120px;
    left: 50%;
    transform: translateX(-50%) ;
    top: 260px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    /* or 156% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #6F6F6F;
   


`

export const ServicesBg = styled.div`
    
    position: absolute;
  
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;  
    
`;


export const ServicesBtnWrapper = styled.div`
    margin-top: 48px;
  
    position: absolute;
    top: 55%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 150%);
    flex-direction: column;
    align-items: center;
    z-index: 99999;

`;








export const InfoContainer = styled.div`
    color: #fff;
    margin-top: 75px;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#010606')};

    @media screen and (max-width: 640px) {
        padding: 50px 0;
        height: 150vh;
        margin: auto;
        margin-top: 75px;
    }
`;

export const InfoContainer1 = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F0F8FF' : '#660099')};

    @media screen and (max-width: 768px) {
        padding: 150px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 125px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        
        
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`;


export const TextWrapper = styled.div`
    max-width: 540;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.p`
    color: #660099;
    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#660099' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 640px) {
        align-items: center;
		
		display:block;
			
		margin: auto;
    }
    
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.7) translateY(-300px);
        margin: auto;
         }
`;

export const Img1 = styled.img`
    width: 100%;
    height: 100%;
    
    margin: 0 0 10px 0;
    padding-right: 0;
`;