import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
// import PriorExperience from './Components/PriorExperience/PriorExperience';
import Scroller from './Components/Scroller/Scroller';


function App() {
  const [bottom, setBottom] = useState(false);
  const [scrollOptions, setScrollOptions] = useState();

  const mainRef = useRef();
  const portfolioRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToPort = (e) =>{e.preventDefault(); portfolioRef.current.scrollIntoView();} 
  const scrollToHome = (e) =>{e.preventDefault(); homeRef.current.scrollIntoView();} 
  const scrollToAbout = (e) =>{e.preventDefault(); aboutRef.current.scrollIntoView();} 
  const scrollToContact = (e) =>{e.preventDefault(); contactRef.current.scrollIntoView();} 

  const getComponentsSizes = () => {
    let tempArr = [...mainRef?.current?.childNodes].map(ele => ele.clientHeight)
    setScrollOptions(tempArr);
  };

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

    if (bottom) {
      setBottom(true)
      console.log('at the bottom');
    } else {
      setBottom(false)
    }
  }
  
  useEffect(() => {
    getComponentsSizes();

    window.addEventListener("resize", getComponentsSizes);

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" onScroll={handleScroll} onClick={getComponentsSizes} >
      <NavBar scrollTo={{scrollToHome, scrollToAbout, scrollToPort, scrollToContact}}/>
      <main ref={mainRef}>
        <Home refProp={homeRef} />
        <About refProp={aboutRef}/>
        <Portfolio refProp={portfolioRef}/>
        <Contact refProp={contactRef}/>
        {/* <PriorExperience refProp={portfolioRef}/> */}
        {/* <div ref={portfolioRef}>Element to scroll to</div>  */}
      </main>
      <Scroller scrollTo={{scrollToHome, scrollToAbout, scrollToPort, scrollToContact}} bottom={bottom} scrollOptions={scrollOptions}/>
    </div>
  );
}

export default App;
