import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import Gallery from './pages/Gallery';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';

import { gallSet1 } from './pages/Data';
import ScrollToTop from './components/ScrollToTop';

export function App() {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
    return (

        <Router>
           <ScrollToTop/>
           <Message/>
 
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route path='/gallery' element={<Gallery data={gallSet1}/>}  />
          </Routes> 

          
        </Router>
       
    );
} export default App;