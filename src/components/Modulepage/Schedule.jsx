import React from 'react'
import './Schedule.css'

function Schedule(props) {
  return (
    <div className='column schedule'>
      <span>{props.f}</span>
      <div className='row'>
        <img src="/Icons/calendar.svg" alt="calendar" />
        <span className='text-gray'>{props.s}</span>
      </div>

      <div className='row'>
        <img src="/Icons/clock-blue.svg" alt="calendar" />
        <span className='text-gray'>{props.t}</span>
      </div>
    </div>
  )
}

export default Schedule
