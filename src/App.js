import './App.css';
import React, { useRef } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import PriorExperience from './Components/PriorExperience/PriorExperience';


function App() {
  const portfolioRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToPort = (e) =>{ e.preventDefault(); portfolioRef.current.scrollIntoView();} 
  const scrollToHome = (e) =>{ e.preventDefault(); homeRef.current.scrollIntoView();} 
  const scrollToAbout = (e) =>{ e.preventDefault(); aboutRef.current.scrollIntoView();} 
  const scrollToContact = (e) =>{ e.preventDefault(); contactRef.current.scrollIntoView();} 

  return (
    <div className="App">
      <NavBar scrollTo={{scrollToHome, scrollToAbout, scrollToPort, scrollToContact}}/>
      <main>
        <Home refProp={homeRef}/>
        <About refProp={aboutRef}/>
        <Portfolio refProp={portfolioRef}/>
        <Contact refProp={contactRef}/>
        {/* <PriorExperience refProp={portfolioRef}/> */}
        {/* <div ref={portfolioRef}>Element to scroll to</div>  */}
      </main>
    </div>
  );
}

export default App;
