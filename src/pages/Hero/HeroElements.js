import styled from 'styled-components';
import {FaWpexplorer} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';

export const HeroContainer = styled.div`
    
   
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;    
    height: 800px;
    top: 150px;
   
    width: 100vw;
    left: 0px;
    border-radius: 0px;

    
 
`;
export const HeroHeader = styled.h1`
    position: absolute;
    width: 1238px;
    height: 325px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
    /* or 100% */
    display: flex;
    align-items: center;
    text-align: center;
    color: #8B9F2C;
    text-shadow: 3px 3px 3px  #fff, -3px -3px 3px  #fff, 3px -3px 3px  #fff, -3px 3px 3px  #fff;

    
    @media screen and (max-width: 550px) {
       zoom: 0.6;
       top: 250px;
    }
  

`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(85, 85, 85, 0.65);

    @media screen and (max-width: 1250px) {
        zoom: 0.8;
    }

    @media screen and (max-width: 950px) {
       zoom: 0.6;
    }
    @media screen and (max-width: 550px) {
       zoom: 0.5;
    }

    
    
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;
export const HeroMessage = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 711px;
    height: 291px;
    left: 50%;
    transform: translateX(-50%);
    top: 400px;

    background: rgba(255, 255, 255, 0.25);
    border: 10px solid rgba(139, 159, 44, 0.75);
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    z-index: 9999;

`




export const HeroMTop = styled.div`
    position: absolute;
    height: 49px;
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    /* or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;
    background: #8B9F2C;


`


export const HName = styled.input.attrs(props => ({
    type: 'text'

}))`
    box-sizing: border-box;

    position: absolute;
    width: 325px;
    height: 38px;
    left: 50%;
    transform: translateX(-50%);
    top: 45px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;
   

`

export const HPhone = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 325px;
    height: 38px;
    left: 50%;
    transform: translateX(-50%);
    top: 90px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const HEmail = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 325px;
    height: 38px;
    left: 50%;
    transform: translateX(-50%);
    top: 135px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const HMessage = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 520px;
    height: 77px;
    left: 50%;
    transform: translateX(-50%);
    top: 185px;

    background: #FFFFFF;
    border: 1px solid #707070;
    border-radius: 8px;

`

export const HButton = styled.button`
    position: absolute;
    height: 40px;
    left: 50%;
    transform: translateX(-50%);
    top: 720px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */

    display: flex;
    align-items: center;

    color: #FFFFFF;
    background: #8B9F2C;
    cursor: pointer;
    z-index: 5;


`




