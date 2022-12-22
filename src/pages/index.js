import React, {useState} from 'react';
import "./index.scss";
//import Footer from '../components/Footer1/Footer';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from './Hero/Hero';
import About from './AboutUs/About';
import Services from './OurServices/Services';
import Projects from './Projects/Projects';
import Message from '../components/Message/Message';

import { motion } from 'framer-motion';
import { animationTwo } from '../components/animations/animations';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
        <>
          <>
          <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
         </motion.div>
        
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}/>
         <div className='over'>
       
          <div className='container'/>
          <Hero/>
          <About />
          <Services/>
          <Projects/>
          <Testimonials/>
          <Contact/>
          </div>
          <Footer/>
        
         
         
          
         </>
        </>
      
    </>
  );
}

export default Home;
