import React, {useState} from 'react';
import Display, {NormalizeNumber} from './Components/Display/Display';
import Button from './Components/Button/Button';
import Split from './Components/Split/Split';

function App() {
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [splitRecords, setSplitRecords] = useState([]);

  const start = () => {
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    updatedMs++;
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH});
  };

  const pause = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms: 0, s: 0, m: 0, h: 0});
    setSplitRecords([]);
  };

  const split = () => {
    setSplitRecords(
      splitRecords.concat([
        NormalizeNumber(time.h) +
          ':' +
          NormalizeNumber(time.m) +
          ':' +
          NormalizeNumber(time.s) +
          ':' +
          NormalizeNumber(time.ms),
      ])
    );
  };

  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <Display time={time} />
          <Button
            status={status}
            pause={pause}
            start={start}
            reset={reset}
            split={split}
          />
          <Split splitRecords={splitRecords} />
        </div>
      </div>
    </div>
  );
}

export default App;
