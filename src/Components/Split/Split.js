import React from 'react';
import './Split.scss'

function Split(props) {
  return (
    <div>
        <table>
            {
            props.splitRecords.map((value, index) => (
                <tr>
                    <td>
                        {index+1}: 
                    </td>
                    <td>
                        {value}
                    </td>
                </tr>
              ))
            }
        </table>
    </div>
  );
}

export default Split;