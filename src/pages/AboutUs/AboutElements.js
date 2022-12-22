import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { keyframes } from 'styled-components'
import {BsDownload} from 'react-icons/bs'

import {Link as LinkR} from 'react-router-dom';

export const AboutContainer = styled.div`

 

    height: 1300px;
    width: 100vw;

    position: relative;

    overflow: hidden;



   
`;
export const AboutBG = styled.div`

    position: absolute;
    display: grid;
    align-items: center;
    top: 150px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;
    }
  
  @media screen and (max-width: 850px) {
       grid-template-columns: 1fr;
       left: 50%;
        transform: translateX(-50%);
    }

    

`;

export const AboutImgContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;

    height: 888px;
    width: 880px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    zoom: 0.9;
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
export const AboutImg = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;

`



export const AboutTextSection = styled.div`
  left: 0px;
    top: 0px;
    position: relative;
    height: 800px;
    width: 880px;
    
    background: #F5F5F5;

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
export const AboutTextContainer = styled.div`
    position: absolute;
    height: 500px;
   
    left: 0%;
    right: 0.63%;
    top: 7px;
    @media screen and (max-width: 850px) {
        left: 50%;
        transform: translateX(-50%);
    }



`
export const AboutSvg = styled.div`
    position: absolute;
    width: 429px;
    height: 331px;
    left: 50%;
    transform: translateX(-50%);
    top: 250px;
    zoom: 1.2;
    background-repeat: no-repeat;
    background-size: cover;

`

export const AboutTextTop = styled.p`
    position: absolute;
    width: 500px;
    height: 29px;
    left: 5%;
    right: 48.82%;
    top: 33px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    /* or 110% */

    display: flex;
    align-items: center;

    color: #8B9F2C;

`
export const AboutHSide = styled.div`
    position: absolute;
    height: 132px;
 
    right: 97.69%;
    top: 120px;

    border: 5px solid #8B9F2C;

`

export const AboutRightBg = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: -45.33%;
    background-repeat: no-repeat;
    background-size: cover;
    

`
export const AboutTextHeader = styled.h2`
    position: absolute;
    height: 138px;
    width: 500px;
    left: 5%;
    right: 7.7%;
    top: 68.39px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 66px;
    /* or 110% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

`

export const AboutText = styled.p`


    position: absolute;
    height: 251px;
    max-width: 40vw;
    top: 250px;
    left: 5%;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    display: flex;
    align-items: left;

    color: #6F6F6F;
    @media screen and (max-width: 850px) {
        max-width: 100%;
     
    }

  



`;

export const AboutVid = styled.img`
    position: absolute;
    width: 566px;
    height: 361px;
    left: 37px;
    top: 495px;
    background: url(house1.jpg);

`

export const AboutVidCov = styled.div`
    position: absolute;
    height: 361px;
    left: 5.85%;
    right: 4.59%;
    top: 495px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(85, 85, 85, 0.65);

`


export const AboutTextWrap = styled.div`
    
    transform: translateX(18%);

`
export const VideoBg = styled.img`

    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
`;

