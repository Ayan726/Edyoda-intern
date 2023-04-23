import React from 'react'
import './Lowerblock.css'

function Lowerblock(props) {
  return (
    <div className='lowerblock'>
    <span className='larger bold'>{props.smallertitle}</span>
      <div className="block">
        {props.first}
        {props.second}
        {props.third}
        {props.fourth}
        {props.fifth}
      </div>
    </div>
  )
}

export default Lowerblock
