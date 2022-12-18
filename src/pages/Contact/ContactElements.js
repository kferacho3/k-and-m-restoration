import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import { motion } from 'framer-motion';


export const ContactContainerImg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;  



`


export const ContactContainer = styled.div`

    height: 750px;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;

    
   
    overflow-x: hidden;

  
  @media screen and (max-width: 850px) {
      display: none;

    }
`;

export const CMessageCont = styled.div`
 
    position: absolute;

    width: 950px;
    height: 478px;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 9999;
    



`

export const CHeader = styled.div`
    box-sizing: border-box;
    
    position: absolute;
    width: 460px;
    height: 45px;
    left: 50%;
    transform: translateX(-50%);
    top: 16px;
    text-align: center;

    background: #8B9F2C;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    /* or 100% */

    text-align: center;
    letter-spacing: 0.44px;

    color: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
    color: white;
  }


`



export const CName = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 450px;
    height: 50px;
    left: 0%;
    right: 51.6%;
    top: 100px;

    background: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
        color: #79787F;
  }


`
export const CAddress = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 450px;
    height: 50px;
    left: 51.7%;
    right: 0%;
    top: 100px;

    background: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
        color: #79787F;
  }



`

export const CCity = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 450px;
    height: 50px;
    left: 0%;
    right: 51.6%;
    top: 175px;
    background: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
        color: #79787F;
  }


`

export const CZip = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 450px;
    height: 50px;
    right: 0%;
    left: 51.6%;
    top: 175px;
    background: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
        color: #79787F;
  }


`

export const CPhone = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 450px;
    height: 50px;
    left: 0%;
    right: 51.6%;
    top: 250px;
    color: #79787F;
    background: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
        color: #79787F;
  }



`

export const CEmail = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 450px;
    height: 50px;
    right: 0%;
    left: 51.7%;
    top: 250px;
    color: #79787F;
    background: #FFFFFF;
    border: 1px solid #E3E2E7;
    border-radius: 2px;
    ::placeholder {
   
  }


`

export const CButton = styled.button`
    position: absolute;
    width: 125px;
    height: 40px;
    left: 50%;
    transform: translate(-50%, 50%);
    
    top: 342px;
    background: #8B9F2C;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    /* or 200% */

   
    align-items: center;
    text-align: center;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    color: #FFFFFF;

    cursor: pointer;
  

`

