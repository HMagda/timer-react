import React from 'react';
import './Display.scss';

function Display(props) {
  return (
    <div>
        <span>{NormalizeNumber(props.time.h)}</span>&nbsp;:&nbsp;
        <span>{NormalizeNumber(props.time.m)}</span>&nbsp;:&nbsp;
        <span>{NormalizeNumber(props.time.s)}</span>&nbsp;:&nbsp;
        <span>{NormalizeNumber(props.time.ms)}</span>
    </div>
  );
}

export function NormalizeNumber(number){
    return (number >= 10) ? number : "0" + number
}

export default Display;