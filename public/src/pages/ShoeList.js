import React from 'react';
import { Shoe } from './Shoe'; // Assuming you have a Shoe component

export const ShoeList = ({ shoes }) => {
  return (
    <>
      {
        shoes.map((shoe, idx) => (
          <Shoe shoe={shoe} key={idx} />
        ))
      }
    </>
  );
};
