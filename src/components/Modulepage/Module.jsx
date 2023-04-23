import React from 'react'
import Upperheader from '../Homepage/Upperheader'
import Lowerheader from '../Homepage/Lowerheader'
import Sidebar from '../Homepage/Sidebar'
import './Module.css'
import Modulesidebar from './Modulesidebar'

import { Outlet } from 'react-router-dom'


function Module() {
  return (
    
    <div>
    <Upperheader/>
    <Lowerheader cl="hidden"></Lowerheader>
    <div className="align">
    <Sidebar/>
    <Modulesidebar/>
    <Outlet/>
    </div>
    </div>

  )
}

export default Module
