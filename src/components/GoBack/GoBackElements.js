

import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const GoBackContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 9999999999;
    width: 294px;
    height: 206px;
    left: 1218px;
    top: 564px;



 
    @media screen and (max-width: 550px) {
       zoom: 0.5;
       //transform: rotate(90deg) translate(775%, -150%);
       transform: rotate(90deg);
       left: 46%;
       top: 86%;
  

    }


`





export const GoBackText = styled.p`


    position: absolute;
    left: -110%;
    top: -10%;
    bottom: 0%;
    white-space: nowrap;
    pointer-events: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 17px;
    /* or 53% */

    display: flex;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-90deg);

`

export const GoBackIcon = styled(LinkR)`
   
    width: 294px;
    height: 206px;
    left: 11.43%;
    right: 34.29%;
    top: 25.3%;
    bottom: -8.05%;
    transform: translate(5px, -35px);
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   
    background-repeat: no-repeat;
    background-size: cover;

`