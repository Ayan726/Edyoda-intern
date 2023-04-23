import React from 'react'
import './Quiz.css'
import Header from './Header'
import Lowerblock from './Lowerblock'
import Sideelement from './Sideelement'
import Schedule from './Schedule'

function Quiz() {
  return (
    <div className='quiz'>
      <Header title="Quiz-1: Data types" date="16 December 2021, Thursday"/>

      <Lowerblock smallertitle="Quiz Details" first = {<Sideelement upper='10' lower='Questions' />} second = {<Sideelement upper='-' lower='Duration'/>} third = {<Sideelement upper='125' lower='Total Score'/>} fourth={<Schedule f='Start:' s='16 December 2021' t='07:30 PM' />} fifth= {<Schedule f='Due:' s='19 December 2021' t='11:59 PM' />}/>
    </div>
  )
}

export default Quiz
