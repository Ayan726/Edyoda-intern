import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { Link } from 'react-router-dom'


function Sidebar() {


  return (
    <div className='sidebar'>
    
    <Link to='/'>
      <div id="home" className={`items ${window.location.pathname === '/' ? 'active' : ''}`}>
        <FontAwesomeIcon className='icon' icon={faHouse}></FontAwesomeIcon>
        <span>HOME</span>
      </div>

    </Link>
    
    <Link to='/module'>
      <div id="module" className={`items ${window.location.pathname === '/module' ? 'active' : ''}`}>
      <FontAwesomeIcon className='icon' icon={faBook}></FontAwesomeIcon>
        <span>MODULES</span>
      </div>

    </Link>
    
    <Link to='/instructor'>
      <div id="instructors" className={`items ${window.location.pathname === '/instructor' ? 'active' : ''}`}>
      <FontAwesomeIcon className='icon' icon={faPersonChalkboard}></FontAwesomeIcon>
        <span>INSTRUCTOR</span>
      </div>

    </Link>
    
    </div>
  )
}

export default Sidebar
