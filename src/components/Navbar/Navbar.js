import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
//import {connectWallet} from './walletconnect';
//import connectWallet from './sdk';
import logo from '../../images/KandMLogo.svg';

import "./Navbar.scss";
import {
     Nav, 
     NavbarContainer, 
     NavLogoCont,
     MobileIcon, 
     NavMenu, 
     NavItem,
     NavLinks, 
     NavBtn,
     NavNumber,
     NavBtnBG
} from './NavbarElements';


const Navbar = ({ toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 10) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogoCont style={{ backgroundImage:`url(${logo})` }} to='/' onClick={toggleHome} ></NavLogoCont>
                <MobileIcon onClick={toggle}> 
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem >
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>About</NavLinks>
                    </NavItem>
                    <NavItem >
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</NavLinks>
                    </NavItem>
                    <NavItem >
                        <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Projects</NavLinks>
                    </NavItem>

                    <NavItem >
                        <NavLinks to='testimonials'  smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Testimonials</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Contact Us!</NavLinks>
                    </NavItem>

                    <NavBtn >
                        <NavNumber smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>(901) 501-5949</NavNumber>
                    </NavBtn>
                    
                </NavMenu>
              
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
