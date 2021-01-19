import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes'
import restaurantService from './services'
import axios from 'axios'

const App = () => {

  const [items, setItems] = useState([])
  const [newItemName, setNewItemName] = useState('')
  const [newItemPrice, setNewItemPrice] = useState('')

  useEffect(() => {
    const dataHook = () => {
      restaurantService.getAll().then(initialItems => setItems(initialItems))
    }

    dataHook()

    }, []);

	const addItem = (event) => {
		event.preventDefault()
		const itemObject = {
			id: items.length +1,
			price: newItemPrice,
			meal: newItemName,
			ingredients: []
		}

    axios
      .post('http://localhost:3001/restaurant', itemObject)
      .then(response => {
        setItems(items.concat(response.data))
    		setNewItemName('')
    		setNewItemPrice('')
      })
	}

	const handleItemNameChange = (event) => setNewItemName(event.target.value)
  const handleItemPriceChange = (event) => setNewItemPrice(event.target.value)

  return(
    <div>

      <h2> Joe's Burger Joint </h2>

      {items.map(item => {
        return(
          <div>
            <Recipes key={item.id} item={item} items={items} setItems={setItems} />
          </div>
        )}
      )}

      <h3> Add New Meal: </h3>
    	  <form onSubmit={addItem}>

    	  	<label>Meal Name</label>
    	  	<input
    			value={newItemName}
    			onChange={handleItemNameChange}
      		/>

    		  <label>Meal Price</label>
      		<input
      			value={newItemPrice}
      			onChange={handleItemPriceChange}
      		/>

      		<button type="submit">Add Meal</button>

  		  </form>
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)
