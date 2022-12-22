import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

import {Link as LinkR} from 'react-router-dom';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 2rem 0;
    top: 0;
    left: 0;
    background: #FFFFFF;
    overflow-x: hidden;
    position: relative;

    
    @media screen and (max-width: 1400px) {
        zoom: 0.9;
    }
  
  
  @media screen and (max-width: 1200px) {
        zoom: 0.8;
    }
  
  @media screen and (max-width: 850px) {
    
      zoom: 0.5;
    }
    
    
`;

export const FooterLinksWrapper = styled.li`
    display: flex;
    flex-direction: column;
    
 

`;


export const FooterG1 = styled.div`
    position: absolute;
    height: 315px;
    width: 342px;
    left: 0px;
    top: -3px;

    background-repeat: no-repeat;
    background-size: cover;
  


`

export const FooterG2 = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 420px;
    top: 0px;
   
    background-repeat: no-repeat;
    background-size: cover;
    



`
export const FooterIconWrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 133px;
    left: 641px;
    top: 173px;
    border-radius: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    

`
export const FooterIcon = styled(LinkR)`
    position: absolute;
    height: 160px;
    width: 240px;
    left: 27px;
    top: 41px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    


`

export const FooterText = styled(LinkS)`
    font-family: 'Roboto';
    color: #8B9F2C;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    white-space: nowrap;
    text-align: left;
    cursor: pointer;


`
export const FooterLinksContainer = styled.ul`
   
    align-items: center;
    justify-content: right;
  
  
    position: absolute;
    left: 80%;

  


`;










export const FooterLinkTitle = styled.div`
    font-size: 2rem;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    font-family: 'Roboto';
    font-style: normal;
    /* or 120% */

    display: flex;
    align-items: center;

    color: #2C2C2C;

    text-align: left;

    text-shadow: .5px .5px #8B9F2C;;
 
    
`;




export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

 
`;

export const SocialLogo = styled(Link)`
    
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const WebsiteRights = styled.small`
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;
    margin-bottom: 16px;
   
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
 
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
  
`;

export const VizIco = styled.img`
    
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    display: flex;
    height: 250px;
    width: 250px;
    margin-bottom: 100px;
    transform: translate(90%, 30%);
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const VizSet = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    justify-content: center;
    grid-template-columns: 1fr 1fr;
    display: table-cell;
    vertical-align: middle;
    gap: 75px;
    align-items: center;
    

`;
