import React from 'react';

const Stock = (change) => {



    
    return (
<tr>
  <td>{change.symbol}</td>
  <td>{change.label}</td>
  <td>{change.date}</td>
  <td>{change.open}</td>
  <td>{change.high}</td>
  <td>{change.low}</td>
  <td>{change.close}</td>
  <td>{change.volume}</td>
</tr> 
)     
};

export default Stock;