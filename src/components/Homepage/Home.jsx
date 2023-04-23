import React from 'react'
import Upperheader from './Upperheader'
import Lowerheader from './Lowerheader'
import Sidebar from './Sidebar'
import Homemain from './Homemain'
import './Home.css'

function Home() {
  return (
    <div>
    <Upperheader/>
    <Lowerheader></Lowerheader>
    <div className="align">
    <Sidebar/>
    <Homemain/>
    </div>
    </div>
  )
}

export default Home
