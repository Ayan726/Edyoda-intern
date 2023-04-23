import React from 'react'
import './Upperheader.css'
function Upperheader() {
  return (
    <div className='upperHeader'>

      <div className='comp-logo'><h2>LOGO</h2></div>
      <div className='userdiv'>
        <span>Hi Test Learner!</span>
        <img id='userlogo' src="/pics/user_logo.jpg" alt="User" />
      </div>
      
    </div>
  )
}

export default Upperheader
