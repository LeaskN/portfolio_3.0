import React, {useEffect, useState} from 'react';
import animate from '../../HelperFunctions/AnimatedLetters';
import './About.css';

export default function About(props){
  const [letters, setLetters] = useState({
    letters: [], 
    count:0,
    count2:0,
    symbols: '+*/|}{[]~":;?/.><=+-_)(*&^%$#@!)}'
  });

  useEffect(() => {
    const name = 'About Me'
    const timer = window.setInterval(() => {
      setLetters(prevLetters => {
        if(prevLetters.letters.join('') === name) window.clearInterval(timer);
        return animate({...prevLetters}, name)
      });
    }, 10);
    return () => {
      window.clearInterval(timer);
    };
  }, [])

  const mapLetters = (arr) => {
    arr.join('').split(' ').splice(1, ' ')
    return arr.map(l => l);
  }

  return(
    <div>
      <div className='page' id='about' ref={props.refProp}>
      <h1 className='colored'><span className='letterIcon nameContainer'>{mapLetters(letters.letters)}</span></h1>
        <h3>Professionally, I am a <span className='highlightedText'>software engineer</span> with experience in <span className='highlightedText'>full stack web development</span>. I'm currently working with <span className='highlightedText'>React</span>, <span className='highlightedText'>Javascript</span>, <span className='highlightedText'>Node.js</span>, <span className='highlightedText'>HTML</span>, <span className='highlightedText'>CSS</span>, <span className='highlightedText'>AWS</span>, <span className='highlightedText'>Salesforce</span>, and more! I'm consistently working on new projects. Most recently these projects have been revolving around <span className='highlightedText'>React</span>, however I am always open to new tech and love learning new things.</h3>
      </div>
    </div>
  ) 
}