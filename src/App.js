import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import LandingPage from './Components/LandingPage/LandingPage';
import Portfolio from './Components/Portfolio/Portfolio';
import PriorExperience from './Components/PriorExperience/PriorExperience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Home />
        <About />
        <Contact />
        <LandingPage />
        <Portfolio />
        <PriorExperience />
      </main>
    </div>
  );
}

export default App;
