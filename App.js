import React from 'react';
import Image from './Components/Image';
import Header from './Components/Header';
import Button from './Components/Button';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';

export default function App(){
    return (
      <div className="App">
        <div className="Container">
        <Image />
        <Header />
        <Button btnName="Email" />
        <About />
        <Interests />
        <Footer />   
        </div>     
      </div>  
    );
}