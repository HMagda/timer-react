import React from 'react';
import './Button.scss';

function Button({ status, stop, start, reset, split }) {
  return (
    <div className="buttons">
      {status === 0 && (
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
          Start
        </button>
      )}
      {status === 1 && (
        <>
          <button className="stopwatch-btn stopwatch-btn-gre" onClick={split}>
            Split
          </button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={stop}>
            Pause
          </button>
        </>
      )}
      {status === 2 && (
        <>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={reset}>
            Reset
          </button>
          <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>
            Resume
          </button>
        </>
      )}
    </div>
  );
}

export default Button;
