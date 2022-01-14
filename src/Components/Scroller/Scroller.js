import React from 'react';
import './Scroller.css';
import { AiOutlineDown } from 'react-icons/ai';

export default function Scroller(props){
  const scroll = (e) => {
    if(!props.scrollOptions) {console.log('quitting');return}
    console.log(window.scrollY, props.scrollOptions[0])
    if(window.scrollY <= props?.scrollOptions[0]-20){
      props?.scrollTo.scrollToAbout(e);
    } else if(window.scrollY <= props?.scrollOptions[1]-20){
      props?.scrollTo.scrollToPort(e);
    } else if(window.scrollY <= props?.scrollOptions[1] + props?.scrollOptions[2]){
      props?.scrollTo.scrollToContact(e);
    } else if (window.scrollY >= props?.scrollOptions[1] + props?.scrollOptions[2] + props?.scrollOptions[3]-20){
      props?.scrollTo.scrollToHome(e);
    }
  }
  
  return( 
    <div className='scroller' onClick={(e) => scroll(e)} >
      { <AiOutlineDown className={ props.bottom ? 'flipped' : 'unflipped' }/> }
    </div>
  )
}