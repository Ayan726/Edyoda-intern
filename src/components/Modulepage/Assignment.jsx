import React from 'react'
import './Assignment.css'
import Header from './Header'
import Lowerblock from './Lowerblock'
import Sideelement from './Sideelement'
import Schedule from './Schedule'


function Assignment() {
  return (
    <div className='assignment'>

      <Header title="Assignment-1: Operators | Loops" date="20 December 2021" firstSideElement = {<Sideelement upper='3' lower='Problems' />} secondSideElement = {<Sideelement upper='100' lower='Total Score'/>}/>

      <Lowerblock smallertitle="Assignment Details" first = {<Sideelement upper='3' lower='Problems' />} second = {<Sideelement upper='100' lower='Total Score'/>} third={<Schedule f='Start:' s='20 December 2021' t='07:30 PM' />} fourth= {<Schedule f='Due:' s='26 December 2021' t='11:59 PM' />}/>


    </div>
  )
}

export default Assignment
