import React from 'react'

function Sideelement(props) {
  return (
    <div className='column text-center'>
      <span className='larger'>{props.upper}</span>
      <span className='text-gray'>{props.lower}</span>
    </div>
  )
}

export default Sideelement
