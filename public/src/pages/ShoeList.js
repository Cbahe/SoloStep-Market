import React from 'react';
import { Shoe } from './Shoe';

export const ShoeList = ({ shoe = [] }) => {
  return (
    <div className="shoe-list">
      {shoe.map((shoe, idx) =>(
        <Shoe shoe={shoe} key={idx}/>
      ))}
    </div>
  );
};