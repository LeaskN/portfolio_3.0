import React, {useEffect, useState} from 'react';
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

  function animate(prevLetters, name){
    if(prevLetters.count2 < 10){
      prevLetters.letters[prevLetters.count] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)];
      for(let i = prevLetters.count; i < prevLetters.letters.length; i++){
        //slow this down!
        prevLetters.letters[i] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)]
      }
      prevLetters.count2++;
      return prevLetters
    }
    prevLetters.count2 = 0
    prevLetters.letters[prevLetters.count] = name[prevLetters.count];
    prevLetters.count++
    return prevLetters;
  }

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