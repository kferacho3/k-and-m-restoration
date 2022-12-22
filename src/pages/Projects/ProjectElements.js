import styled from 'styled-components';
import {FaWpexplorer} from 'react-icons/fa'
import {VscSmiley} from 'react-icons/vsc'
import {Link as LinkR} from 'react-router-dom';

export const ProjectsContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;    
    height: 1200px;
    width: 100vw;
    left: 0px;
    border-radius: 0px;
 
  
  @media screen and (max-width: 850px) {
    
    }
    
`;

export const ProjectsBg = styled.div`
    position: absolute;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  
    
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;

    }
  
  @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      zoom: 0.5;
    }
`;

export const ProjectGrid = styled.div`

`



export const Col1 = styled.div`
    position: relative;
    height: 1200px;
    left: 100px;
    top: 0px;
 
  
  @media screen and (max-width: 850px) {
      left: 50%;
      transform: translateX(-35%);
    }
`

export const Col2 = styled.div`
    position: relative;

    height: 1200px;
    right: 0px;
    top: 0px;
`

export const LeftBg = styled.div`
    position: absolute;
    width: 700px;
    height: 140vh;
    top: 0px;
    bottom: 469px;
    background-repeat: no-repeat;
    background-size: cover;
`

export const RightBg = styled.div`
    position: absolute;
    width: 734px;
    height: 100vh;
    top: 0px;
    bottom: 469px;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ProjectHeaderSection = styled.div`
    position: relative;
    width: 600px;
    height: 100px;
    left: 0px;
    top: 0px;
`

export const PHead = styled.h1`
    position: absolute;
    width: 566px;
    height: 212px;
    left: 64px;
    top: 81px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 56px;
    /* or 78% */
    display: flex;
    align-items: center;
    color: #1B1B1B;
`

export const PHeadTop = styled.h2`
    position: absolute;
    width: 300px;
    height: 27px;
    left: 20px;
    top: 0px;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;
    /* identical to box height, or 159% */
    display: flex;
    align-items: center;
    color: #8B9F2C;
`

export const PHeadLine = styled.div`
    position: absolute;
    width: 110px;
    height: 2px;
    left: 343px;
    top: 14px;
`

export const PCarouselCont = styled.div`
    position: relative;
    width: 700px;
    height: 624px;
    top: 315px;
    z-index: 999999;
    transform: scale(0.9);
    
`

export const PCollageSection = styled.div`
    position: relative;
    display: flex;
    height: 775px;
    width: 100%;
    top: 0px;
    border-radius: 0px;
  

    width: 1000px;
    transform: scale(0.8);
`

export const PCollageBg = styled.div`
    position: absolute;
  
    height: 100%;
    left: 0%;
    right: 0px;
    top: -50px;
    bottom: 469px;
    background-repeat: no-repeat;
    background-size: cover;
  
`

export const PCollPCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const PCollPICCont = styled.div`
    display: flex;
    width: 250px;
    height: 250px;
    position: absolute;
`


export const PCollLT = styled.p`
    position: absolute;
    width: 250px;
    height: 34px;
    left: 40px;
    top: 450px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 34px;
    /* identical to box height, or 85% */
    display: flex;
    align-items: center;
    color: #000000;
 
  
  @media screen and (max-width: 500px) {
      zoom: 0.5;
    }
`

export const PCollRT = styled.p`
    position: absolute;
    width: 294px;
    height: 89px;
    left: 650px;
    top: 100px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    /* or 100% */
    display: flex;
    align-items: center;
    color: #000000;
`

export const PCollLL = styled.div`
    position: absolute;
    width: 250px;
    height: 2px;
    left: 42px;
    top: 550px;
    background: #8B9F2C;
`

export const PButtonArea = styled(LinkR)`
    position: absolute;
    height: 614px;
    left: 0px;
    right: 0px;
    top: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    z-index: 5;
    transform: scale(0.8);
`

export const ArrowForward = styled(FaWpexplorer)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(VscSmiley)`
    margin-left: 8px;
    font-size: 20px;
`;

