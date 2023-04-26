import React from 'react';
import './Split.scss';

function Split({splitRecords}) {
  return (
    <div>
      <table>
        <tbody>
          {splitRecords.map((value, index) => (
            <tr key={value}>
              <td>{index + 1}:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Split;
