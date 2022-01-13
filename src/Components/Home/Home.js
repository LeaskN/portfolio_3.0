import React from 'react';
import './Home.css'

export default function Home(props){
  return(
    <div className="home" ref={props.refProp}>
      <h1 className="intro">Hi, I'm Nic</h1>
    </div>
  )
}