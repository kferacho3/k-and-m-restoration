import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { motion } from 'framer-motion';


export const TestimonialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;    
    height: 1000px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;

  
  @media screen and (max-width: 850px) {
     
    }

`

export const TestBg = styled.div`
    position: absolute;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    left: 50%;
    transform: translateX(-50%);
    grid-gap: 30px;
 
  
  @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
    }
    
`;
export const TestSvg = styled.div`
    position: absolute;
    width: 100vw;
    height: 1000px;
    left: 0px;
    top: 170px;
    background-repeat: no-repeat;
    background-size: cover;


`


export const Col1 = styled.div`
    position: relative;
    height: 615px;
    width: 754px;
    left: 0px;
    border-radius: 0px;
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;
    }
  
  @media screen and (max-width: 850px) {
      zoom: 0.4;
    }


`
export const TestimonialH1 = styled.h1`
    position: absolute;
    height: 147px;
    width: 1097px;
   text-align: center;
    top: -10px;
    font-size: 96px;
    border-radius: 0px;
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;
    }
  
  @media screen and (max-width: 850px) {
      zoom: 0.5;
    }

`

export const TestimonialH2 = styled.h2`
    position: absolute;
    height: 100px;
    width: 575px;
    left: 90px;
    top: 7px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 40px;
    letter-spacing: -0.8px;
    color: #101117;
    border-radius: 0px;

`

export const TestimonialSubH = styled.h3`
    position: absolute;
    height: 25px;
    width: 325px;
    left: 90px;
    top: 190px;
    font-family: 'Inter';
    color: #101117;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    border-radius: 0px;


`

export const LeftB = styled(LinkS)`
    position: absolute;
    height: 60px;
    width: 61px;
    left: 90px;
    top: 275px;
    cursor: pointer;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;


`

export const RightB = styled(LinkS)`
    position: absolute;
    height: 60px;
    width: 61px;
    left: 200px;
    top: 275px;
    cursor: pointer;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;


`



export const Col2 = styled.div`

    position: relative;
    height: 550px;
    width: 650px;
    border-radius: 0px;
    box-shadow: inset 0px -7px 4px rgba(0, 0, 0, 0.75);
    background: #F9FAFB;
    border-radius: 5px;
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;
    }
  
  @media screen and (max-width: 500px) {
      zoom: 0.5;
    }

`

export const CarouselWrap = styled.div`




`
export const TestTextWrap = styled.div`
    position: absolute;
    height: 500px;
    width: 550px;
    left: 50%;
    transform: translate(-50%, -490px);
    border-radius: 0px;




`
export const TestText = styled.p`
    
    
    position: absolute;
    height: 164px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    

    height: 300px;
  
    top: 50px;
    background-color: #F9FAFB;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    /* or 140% */

    align-items: center;
    text-indent: 30px;

    color: #101117;




`

export const TestTextBot = styled.p`
    
    
    width: 403px;
    height: 244px;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    position: absolute;
    height: 28px;
    top: 250px;
    background-color: #F9FAFB;
    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    /* or 135% */

    display: flex;
    align-items: center;

    color: #101117;



`

export const TestApost = styled.div`
  
    height: 500px;
    width: 636px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;


`


export const TestStars = styled.div`
    position: absolute;
    height: 60px;
    width: 213px;
    left: 50%;
    transform: translateX(-50%);
    top: 323px;
    background: rgba(255, 255, 255, 0.002);
    border: 2px solid #EEEEEE;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 8px; 
    background-repeat: no-repeat;
    background-size: cover;



`
