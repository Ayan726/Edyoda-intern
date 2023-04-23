import React from 'react'
import './Homemain.css'
function Homemain() {
  return (
    <div className='homemain'>
        <h1>Upcoming Certifications</h1>
        <div className="certifications">

        <div className="wrapper">
            <img src="Icons/Data-Analysis.png" alt="Data-analysis" />
            <div className="part">
                
                <span className='roundborder space bg-blue'>CERTIFICATION | ATTEMPT 1</span>
                
                <p>
                    DATA ANALYSIS CERTIFICATION
                </p>
                
                <span className='roundborder space bg-pink'>COMPLETED | 21 MAR 2022</span>
                
            </div>
        </div>

            <div className="part">
                <span className='bold'>Exam Structure</span>
                <div className="round">
                    <span>Round 1</span><span className='bg-light-blue'>MCQS</span><span className='bg-light-blue'>CODING</span>
                </div>
                <div className="round">
                    <span>Round 2</span><span className='bg-light-blue'>PROJECT</span>
                </div>

            </div>

            <button className="btn">
                View Exam Details
            </button>
        </div>


        <h1>Continue Learning</h1>

        <p className='text-blue text-center bold'>View Module Details</p>

        <div className="learning">
            <div className="wrangling">
            <div className="firstHalf">
                <img src="Icons/Data Wrangling.png" alt="Data wrangling" />
                <div className="part1">
                <p>DATA WRANGLING & VISUALIZATION</p>
                <div className="inst">
                    <img src="pics/user_logo.jpg" alt="user" height="40px" />
                    <span className='bg-light-blue'>Test Instructor</span>
                </div>
                <div className="feat">
                <div className="feat-items">
                    <span>Live Sessions</span>
                    <div className="bar"></div>
                </div>
                <div className="feat-items">
                    <span>Assignments</span>
                    <div className="bar"></div>
                </div>
                <div className="feat-items">
                    <span>MCQ Quiz</span>
                    <div className="bar"></div>
                </div>

                </div>

                </div>
            </div>

            <div className="secondHalf">
            <div className="today">
                <p>Today's Plan</p>
                <span>21 March 2022</span>
            </div>
            <p className="text-blue bold">
                Data Transformation Using Pandas - 3
            </p>
            <div className="feedback">
                <span>Daily Feedback</span>
                <span><em className='text-blue'>opens at 07.30 PM</em></span>
            </div>

            <button className='btn1'>JOIN LIVE SESSION</button>
            <span>BEGINS AT 07:30 PM</span>
            </div>

            </div>

            <div className="progress">

            <p>Progress Overview</p>

            <div className="overview">
                <span className='larger'>0%</span>
                <span>Overall Grade</span>
            </div>
            <div className="overview">
                <span className='larger'>0%</span>
                <span>Attendance</span>
            </div>
            <p className='text-blue bold'>View Detailed Process</p>
            </div>

        </div>
        
      
    </div>
  )
}

export default Homemain
