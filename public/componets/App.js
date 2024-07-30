import React, { useState, useEffect } from 'react';
import { ShoeList } from './ShoeList';
import SignIn from './signin';
import signup from './signup';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [shoe, setShoe] = useState([]);
	const [data, setData] = useState([]);
	const [sellShoe, setSellShoe] = useState(null);


	async function fetchShoe(){
		try {
			const response = await fetch(`${apiURL}/shoe`);
			const shoeData = await response.json();
			
			setShoe(shoeData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function clickHandler(slug) {
		try {
		const res = await fetch(`${apiURL}/shoe/${slug}`)
		const data = await res.json();
		setSellShoe(data)
	  } catch (err) {
		console.log('Oh no an error! ', err)
	  }
	}
async function onDelete(slug){
	try{
		const res = await fetch (`${apiURL}/shoe/${slug}`,{
			method:"DELETE"
		})
	}
		catch(error){
			console.log('can not delete',error)
		}
	}

	useEffect(() => {
		fetchShoe();
	}, [data]);

	function handleItemClick(slug) {
		clickHandler(slug)
	  }
	function handleBack() {
		setSelItem(null)
	  }
	async function deleteItem(shoe){
			await onDelete(shoe.id);
	}
	return (
		<main>	
      <h1>SoloShoe Market</h1>
			<h2>All things Shoe</h2>
			{sellShoe ? (
				<div className="shoe-detail">
    <h3>Name: {sellShoe.name}</h3>
    <h4>Price: {sellShoe.price}</h4>
    <h4>Size:{sellShoe.size}</h4>
    <h4>Category: {sellShoe.category}</h4>
	<img src={sellShoe.image} alt={sellShoe.name} />
	<button onClick={handleBack}>Back to Shoe Shop</button>
	<button onClick= {() => deleteItem(selItem)} >Delete Item</button>
						  </div>
			) : (
				<>
				<ShoeList items={shoe} onTitleClick={handleItemClick} />
			
				</>
			)}
		</main>
	)
}