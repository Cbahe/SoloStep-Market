import React from 'react';

export const Shoe = ({ shoe }) => {
  return (
    <div className="shoe-item">
      <h4>{shoe.name}</h4>
      <p>Price: ${shoe.price}</p>
      <p>Size: {shoe.size}</p>
      <p>Category: {shoe.category}</p>
      {shoe.image && <img src={shoe.image} alt={shoe.name} />}
    </div>
  );
};
