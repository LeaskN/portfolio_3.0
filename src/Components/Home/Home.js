import React, {useEffect, useState} from 'react';
import './Home.css';

export default function Home(props){
  const name = 'Nicholas Leask'
  const [letters, setLetters] = useState({
    letters: ['+','*','=','-','_','&','%','$','#','@','!','}','{','#'], 
    count:0,
    count2:0,
    symbols: ':*;/|}{[]":;?/.+-)(*^!)}'
  }) ;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLetters(prevLetters => {
        if(prevLetters.letters.join('') === name) window.clearInterval(timer);
        return animate({...prevLetters}, name);
      });
    }, 95);
    return () => {
      window.clearInterval(timer);
    };
  }, [])

  function animate(prevLetters, name){
    if(prevLetters.count2 < 2){
      prevLetters.letters[prevLetters.count] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)];
      for(let i = prevLetters.count; i < prevLetters.letters.length-1; i++){
        for(let j = i; j < prevLetters.letters.length; j++){
          prevLetters.letters[j] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)];
        }
        prevLetters.letters[i] = prevLetters.symbols[Math.floor(Math.random() * prevLetters.symbols.length)];
      }
      prevLetters.count2++;
      return prevLetters;
    }
    prevLetters.count2 = 0;
    prevLetters.letters[prevLetters.count] = name[prevLetters.count];
    prevLetters.count++;
    // console.log(prevLetters.letters);
    return prevLetters;
  }

  const mapLetters = (arr) => {
    if(arr.reduce((l,a) => l+=a).toLowerCase() === name.toLowerCase()){
      console.log('test')
      return name;
    }
    return arr.reduce((l,a) => l+=a);
  }

  return(
    <div className="home" ref={props.refProp}>
      <h1 className="intro">Hi, I'm
        <span className='colored'><div className='letterIcon nameContainer'>{letters.letters.join('').toLowerCase().includes(name.toLowerCase()) ? name : mapLetters(letters.letters)}</div></span>
      </h1>
      <h3>I'm a <span className='colored'>software engineer</span></h3>
    </div>
  )
}