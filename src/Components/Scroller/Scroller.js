import React, { useState } from 'react';
import './Scroller.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export default function Scroller(props){
  const scroll = (e) => {
    console.log(window.scrollY, props.scrollOptions.reduce((a, c) => a+c,0))
    if(window.scrollY <= props?.scrollOptions[1]-20){
      props?.scrollTo.scrollToAbout(e);
    } else if(window.scrollY <= props?.scrollOptions[1] + props?.scrollOptions[2]-20){
      props?.scrollTo.scrollToPort(e);
    } else if(window.scrollY <= props?.scrollOptions[1] + props?.scrollOptions[2] + props?.scrollOptions[3]-20){
      props?.scrollTo.scrollToContact(e);
    } else if (window.scrollY >= props?.scrollOptions[1] + props?.scrollOptions[2] + props?.scrollOptions[3]-20){
      props?.scrollTo.scrollToHome(e);
    }
  }

  

  if(props.bottom){
    return(
      <div className='scroller' onClick={(e) => scroll(e)} >
        { <AiOutlineUp /> }
      </div>
    )
  } else {
    return(
      <div className='scroller' onClick={(e) => scroll(e)} >
        {<AiOutlineDown />}
      </div>
    )
  }
}