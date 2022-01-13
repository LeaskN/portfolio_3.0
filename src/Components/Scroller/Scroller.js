import React, { useState } from 'react';
import './Scroller.css';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export default function Scroller(props){
  const [ location, setLocation ] = useState(0);

 

  const scroll = (e) => {
    console.log(location)
    if(location === 'home'){
      setLocation('about');
      console.log(props)
      props.scrollTo.scrollToAbout(e);
    } else if(location === 'about'){
      setLocation('port');
      props.scrollTo.scrollToPort(e);
    } else if(location === 'port'){
      setLocation('contact');
      props.scrollTo.scrollToContact(e);
    } else {
      setLocation('home');
      props.scrollTo.scrollToHome(e);
    }
  }

  

  if(location === 'contact' || props.bottom){
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