import React, {useEffect, useState} from 'react';
import animate from '../../HelperFunctions/AnimatedLetters';
import './Home.css';

export default function Home(props){
  const [letters, setLetters] = useState({
    letters: [], 
    count:0,
    count2:0,
    symbols: '+*/|}{[]~":;?/.><=+-_)(*&^%$#@!)}'
  }) ;

  useEffect(() => {
    const name = 'Nicholas Leask'
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
    console.log(arr)
    return arr.map(l => l);
  }

  return(
    <div className="home" ref={props.refProp}>
      <h1 className="intro">Hi, I'm
        <span className='colored'><span className='letterIcon nameContainer'>{mapLetters(letters.letters)}</span></span>
      </h1>
      <h3>I'm a <span className='colored'>software engineer</span></h3>
    </div>
  )
}