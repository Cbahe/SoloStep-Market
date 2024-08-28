import React, { useState, useEffect } from 'react';
import SignIn from './signin';
import SignUp from './signup';
import {ShoeList} from './ShoeList';
import apiURL from '../api'


export const Main = () => {
  const [shoe, setShoe] = useState([]);
  const [sellShoe, setSellShoe] = useState(null);

  // Fetch shoe data
  async function fetchShoe() {
    try {
      const response = await fetch(`${apiURL}/shoe`);
      const shoeData = await response.json();
      setShoe(shoeData);
    } catch (err) {
      console.log("Oh no, an error! ", err);
    }
  }

  // Fetch individual shoe details
  async function clickHandler(slug) {
    try {
      const res = await fetch(`${apiURL}/shoe/${slug}`);
      const data = await res.json();
      setSellShoe(data);
    } catch (err) {
      console.log('Oh no, an error! ', err);
    }
  }

  // Delete a shoe
  async function onDelete(slug) {
    try {
      await fetch(`${apiURL}/shoe/${slug}`, {
        method: "DELETE"
      });
      fetchShoe(); // Refresh the list after deletion
    } catch (error) {
      console.log('Cannot delete', error);
    }
  }

  useEffect(() => {
    fetchShoe();
  }, []);

  function handleItemClick(slug) {
    clickHandler(slug);
  }

  function handleBack() {
    setSellShoe(null);
  }

  async function deleteItem(shoe) {
    await onDelete(shoe.id);
  }

  return (
    <main>
      <h1>SoloShoe Market</h1>
      <h2>All things Shoe</h2>
      <ShoeList/>
      {sellShoe ? (
        <div className="shoe-detail">
          <h3>Name: {sellShoe.name}</h3>
          <h4>Price: {sellShoe.price}</h4>
          <h4>Size: {sellShoe.size}</h4>
          <h4>Category: {sellShoe.category}</h4>
          <img src={sellShoe.image} alt={sellShoe.name} />
          <button onClick={handleBack}>Back to Shoe Shop</button>
          <button onClick={() => deleteItem(sellShoe)}>Delete Item</button>
        </div>
      ) : (
        <ShoeList/>
      )}
    </main>
  );
};
