import React from 'react';

// просто вынес шапку таблицы

const HatTable = () => {
    return (
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Label</th>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
      </thead>
    );
};

export default HatTable;