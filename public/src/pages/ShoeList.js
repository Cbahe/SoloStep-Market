import React from 'react';
import { Shoe } from './Shoe';

export const ShoeList = ({ shoes = [] }) => {
  return (
    <div className="shoe-list">
      {shoes.map((shoe, idx) =>(
        <Shoe shoe={shoe} key={idx}/>
      ))}
    </div>
  );
};