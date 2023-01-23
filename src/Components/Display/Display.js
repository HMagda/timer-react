import React from 'react';
import './Display.scss';

function Display(props) {
  return (
    <div className='numbers'>
      <span className='time'>{NormalizeNumber(props.time.h)}</span>&nbsp;:&nbsp;
      <span className='time'>{NormalizeNumber(props.time.m)}</span>&nbsp;:&nbsp;
      <span className='time'>{NormalizeNumber(props.time.s)}</span>&nbsp;:&nbsp;
      <span className='time'>{NormalizeNumber(props.time.ms)}</span>
    </div>
  );
}

export function NormalizeNumber(number) {
  return number >= 10 ? number : '0' + number;
}

export default Display;
