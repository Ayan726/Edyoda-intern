import React from 'react'
import './Modulesidebar.css'
import { Link, useLocation } from 'react-router-dom'

function Modulesidebar() {
  const location = useLocation();


  return (
    <div className='Modulesidebar'>
    <Link to='/module'>
      <div className={`itm ${location.pathname === '/module' ? 'act' : ''}`}>
        <img src={location.pathname === '/module' ? '/Icons/activeTopic.svg' : '/Icons/topic.svg'} alt="play" />
        <span>Python Loops</span>
      </div>

    </Link>

    <Link to='/module/quiz'>
      <div className={`itm ${location.pathname === '/module/quiz' ? 'act' : ''}`}>
        <img src={location.pathname === '/module/quiz' ? '/Icons/activeModuleQuiz.svg' : '/Icons/moduleQuiz.svg'} alt="quiz" />
        <span>Quiz-1:Data Types</span>
      </div>
    </Link>


    <Link to='/module/assignment'>

      <div className={`itm ${location.pathname === '/module/assignment' ? 'act' : ''}`}>
        <img src={location.pathname === '/module/assignment' ? '/Icons/activeAssignment.svg' : '/Icons/assignment.svg'} alt="assignment" />
        <span>Assignment-1: Operators | Loops</span>
      </div>

    </Link>

    </div>
  )
}

export default Modulesidebar
