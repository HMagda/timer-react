import React from 'react';
import './Split.scss';

function Split(props) {
  return (
    <div>
      <table>
        <tbody>
          {props.splitRecords.map((value, index) => (
            <tr key={value}>
              <td >{index + 1}:</td>
              <td >{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Split;
