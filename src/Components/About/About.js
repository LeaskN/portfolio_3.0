import React from 'react';

export default function About(props){
  return(
    <div>
      
      <div className='page' id='about' ref={props.refProp}>
        <h1>About me</h1>
        <p>Professionally, I am a software engineer with experience in full stack web development. I'm currently working with React, Javascript, Node.js, HTML, and CSS. I'm consistently working on new projects. Most recently these projects have been revolving around React, however I am always working to improve my software engineering skills</p>
      </div>
    </div>
  ) 
}