import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div className='Header'>
    <div className="column">
        <h1>{props.title}</h1>
        <span className='text-gray'>{props.date}</span>
    </div>
    
    <div className="sides">
    {props.firstSideElement}
    {props.secondSideElement}
    </div>
      
    </div>
  )
}

export default Header
