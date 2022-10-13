import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <div className='buttons'>
      {(props.status === 0)? 
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>Start</button> : ""
      }
      {(props.status === 1)? 
      <div>
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.split}>Split</button>
        <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.stop}>Pause</button>  
      </div> : ""
      }
      {(props.status === 2)? 
      <div>
        <button className="stopwatch-btn stopwatch-btn-red" onClick={props.reset}>Reset</button> 
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>Resume</button>
      </div> : ""
      }

    </div>
  );
}

export default Button;