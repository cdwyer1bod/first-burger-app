import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes'


const App = () => {

  const [items, setItems] = useState([
    {id: 1, meal: 'Beef Burger', price: 10, ingredients: [
        { id: 1, name: 'Cheese', cost: 1.50, quantity: 1 },
        { id: 2, name: 'Tomato', cost: 1.00, quantity: 1 },
        { id: 3, name: 'Onion', cost: 0.75, quantity: 1 },
        { id: 4, name: 'Beef Patty', cost: 3.75, quantity: 1 }
      ]
    },
    {id: 2, meal: 'Cheese Burger', price: 12, ingredients: [
        { id: 1, name: 'Cheese', cost: 1.50, quantity: 1 },
        { id: 2, name: 'Tomato', cost: 1.00, quantity: 1 },
        { id: 3, name: 'Onion', cost: 0.75, quantity: 1 },
        { id: 4, name: 'Beef Patty', cost: 3.75, quantity: 1 }
      ]
    }
  ])
  const [newItemName, setNewItemName] = useState('')
  const [newItemPrice, setNewItemPrice] = useState('')

	const addItem = (event) => {
		event.preventDefault()
		const itemObject = {
			id: items.length +1,
			price: newItemPrice,
			meal: newItemName,
			ingredients: []
		}
		setItems(items.concat(itemObject))
		setNewItemName('')
		setNewItemPrice('')
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
