import React from 'react';
import { Shoe } from './Shoe';

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
