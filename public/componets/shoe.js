import React from 'react';
import apiURL from '../api';

export const Shoe = ({ shoe, onClick}) => {
  return <>
  <div>
    <button onClick={onClick}><h3>{shoe.title}</h3></button>
  </div>
  </>
};