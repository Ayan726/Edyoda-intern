import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './Topic.css'
function Topc() {
  return (
    <div className='topic'>
    <div className="column">
      <h1>Python Loops</h1>
      <span>15 December 2021, Wednesday, 07:30 PM</span>
    </div>
      <p className='text-blue bold text-right'>DAILY FEEDBACK</p>

    <div className="lowertopic">
        <div className="navtopic">
            <div className="cont">
                <img src="/Icons/information-circle 1.svg" alt="info" />
                <span className='bold'>SESSION PLAN</span>
            </div>
            <div className="cont">
                <img src="/Icons/play-circle.svg" alt="info" />
                <span>PRE-WATCH VIDEOS</span>
            </div>
            <div className="cont">
                <img src="/Icons/videocam.svg" alt="info" />
                <span>SESSION RECORDING</span>
            </div>
            <div className="cont">
                <FontAwesomeIcon className='ico' icon={faFile}/>
                <span>REFERENCES</span>
            </div>
            
        </div>

        <div className="lowerpart">

        <div className="session-plan column mb-1">
            <p className='bold'>Session Plan</p>
            <span>LIVE session is about to start. Please stay tuned.</span>
            <button className='btn1'>JOIN LIVE SESSION</button>
        </div>

        <div className="sub-topics column mb-1">
            <span className='bold text-black'>Sub-Topics</span>

            <span>1. Sorting and indexing Dataframe</span>
            <span>2. Filtering Dataframe</span>
            <span>3. Usage of Ioc and iloc functions</span>
            
        </div>

        <span className='bold text-black'>Session details</span>
        </div>


    </div>
    </div>
  )
}

export default Topc
