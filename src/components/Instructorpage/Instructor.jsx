import React from 'react'
import Upperheader from '../Homepage/Upperheader'
import Lowerheader from '../Homepage/Lowerheader'
import Sidebar from '../Homepage/Sidebar'
import './Instructor.css'

function Instructor() {
  return (
    <div>
        <Upperheader/>
        <Lowerheader cl="hidden"></Lowerheader>
        <div className="align">
        <Sidebar/>
        <div className="ins">

        </div>
        </div>
    </div>
  )
}

export default Instructor
