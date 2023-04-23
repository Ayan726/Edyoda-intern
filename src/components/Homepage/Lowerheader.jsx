import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Lowerheader.css'


function Lowerheader(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [content, setContent] = useState(faAngleDown);
  const [code, setCode] = useState('DS031221');

  
  
  
  const hidediv = () => {

    setIsHidden(!isHidden);
  }

  useEffect(() => {    
    if (isHidden) {
      setContent(faAngleDown);
    } else {
      setContent(faAngleUp);
    }
  }, [isHidden]);


  const changeContent = (e) => {
    setCode(e.target.innerText);
    const codes = document.querySelectorAll('.codes');
    codes.forEach(el => {
      if(el.classList.contains('highlighted'))el.classList.remove('highlighted');
    })
    
    e.target.classList.add('highlighted');
  }


  return (
    <div className='lowerHeader'>
    <div className="visible">
      <div className='dropdiv'>
        <span id='code'>{code}</span>
        <span className={`dropdown ${props.cl}`} onClick={hidediv}><FontAwesomeIcon icon={content} /></span>
      </div>
        <p>Data Scientist Program</p>
    </div>

    <div className={`lowerdiv ${isHidden ? 'hidden' : ''}`}>
    <div><span>Select Program</span></div>
    <div className="lowerdivmain">
      <span className="codes" onClick={changeContent}>ECRD</span>
      <span className="codes" onClick={changeContent}>FSR222222</span>
      <span className="codes" onClick={changeContent}>DS261121</span>
      <span className="codes highlighted" onClick={changeContent}>DS031221</span>
    </div>
    </div>

    </div>
  )
}

export default Lowerheader
