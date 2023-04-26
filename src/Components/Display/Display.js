import React from 'react';
import './Display.scss';

function Display({time}) {
  return (
    <div className='numbers'>
      <span className='time' data-testid='time-h'>{NormalizeNumber(time.h)}</span>&nbsp;:&nbsp;
      <span className='time' data-testid='time-m'>{NormalizeNumber(time.m)}</span>&nbsp;:&nbsp;
      <span className='time' data-testid='time-s'>{NormalizeNumber(time.s)}</span>&nbsp;:&nbsp;
      <span className='time' data-testid='time-ms'>{NormalizeNumber(time.ms)}</span>
    </div>
  );
}

export function NormalizeNumber(number) {
  return number >= 10 ? number : '0' + number;
}

export default Display;
