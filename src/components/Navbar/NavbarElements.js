import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import "./Navbar.scss";
import logo from '../../images/KandMLogo.svg';

export const Nav = styled.nav`
   
    height: 130px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999999;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    
`;


export const NavLogoCont = styled.div`
    height: 112px;
    width: 206px;
    transform: scale(0.6) translateY(-25px);
    left: 0px;
    top: 0px;
    border-radius: 0px;




`
export const NavLogo = styled(LinkR)`

    height: 100%;
    width: 100%;
    padding: 20px 80px;
    justify-self: flex-start;
    cursor: pointer;
    
    display: flex;
    align-items: center;
  
 
    
    &:hover {
        
    }
    @media screen and (max-width: 1350px) {
    transform: scale(0.9) translateX(-80px);
}
@media screen and (max-width: 1150px) {
    transform:scale(0.85) translateX(-100px);
}
@media screen and (max-width: 950px) {
    transform: scale(0.8) translateX(-240px);
}
    @media screen and (max-width: 870px)  {
        margin-left: -20px;
    }
    
`;

export const MobileIcon = styled.div`
   display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        transform: translate(1050%, 60%);
        font-size: 2.8rem;
        cursor: pointer;
        color: #fff;
        }   
    `;

export const NavMenu = styled.ul`

    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    font-family: Lato;
            
    
@media screen and (max-width: 1350px) {
    transform: scale(0.9) translateX(-100px);
}
@media screen and (max-width: 1150px) {
    transform:scale(0.85) translateX(-225px);
}
@media screen and (max-width: 950px) {
    transform: scale(0.8) translateX(-350px);
}

    @media screen and (max-width: 870px) {
       display: none;
    }
`;

export const NavItem = styled(LinkS)`
    
    height: 100%;
    width: 100%;
    margin-right: -100px;
    white-space: nowrap;
    padding: 10px 80px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 60px;
    /* or 429% */

    display: flex;
    align-items: center;
    letter-spacing: 1px;

    color: #222222;
    transition: all 0.2s ease-in-out;
   
  
    &:hover {
        color: #8B9F2C;
        text-decoration: underline;
      
    }
    &:active {
        color: #8B9F2C;
        text-decoration: underline;
    }
    
     
`;

export const NavLinks = styled(LinkS)`
    
    display: flex;
    align-items: center;
    text-decoration: none;
    min-height: 100%;
    cursor: pointer;
    color: #000;
    font-size: 1.25em;
    z-index: 99;
    &:hover {
        color: #8B9F2C;
        text-decoration: underline;
      
    }
    &:active {
        color: #8B9F2C;
        text-decoration: underline;
        text-shadow: 5px 5px #FFF;
    }

    @media screen and (max-width: 1350px) {
    font-size: 2.25rem;
}

@media screen and (max-width: 850px) {
        font-size: 1.5rem;

    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 990px) {
        transform: scale(0.70) translateX(-120px) translateY(20px);
       
     }
    @media screen and (max-width: 870px) {
        display: none;
    }
`;

export const NavNumber = styled(LinkR)`
  
    color: #8B9F2C;
    text-shadow: 0.5px 0.5px #000;
    white-space: nowrap;
    padding: 10px 80px;
    margin-left: 50px;
    
    font-size: 1.25rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 9999;
    &:hover {
       // background-image: url('./images/chest2.png');
        
    }

`;

export const NavBtnBG = styled.div`
    padding: 20px 22px;
    margin-left: -40px;
    margin-top: 20px;
    width: 300px;
    height: 300px;
    position: absolute;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-image: url('./images/rainbow.png');
    background-position: center;
    background-size: cover;
    transform: scale(7) translateX(14.5px);

   
`;

