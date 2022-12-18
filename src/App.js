import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import Footer from './components/Footer/Footer';



export function App() {

    return (

        <Router>
          <Routes >
            <Route path="/" element={<Home />}/>
            
          </Routes> 
          <Footer/>
          </Router>
       
    );
} export default App;