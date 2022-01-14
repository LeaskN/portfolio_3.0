import React from 'react';
import './Home.css';

export default function Home(props){
  return(
    <div className="home" ref={props.refProp}>
      <h1 className="intro">Hi, I'm <span className='colored'>Nic</span></h1>
      <h3>I'm a <span className='colored'>software engineer</span></h3>
    </div>
  )
}