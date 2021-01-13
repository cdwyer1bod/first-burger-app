import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes'

const twoDP = (num) => (Math.round(num * 100) / 100).toFixed(2)



const App = () => {

  const [items, setItems] = useState([
    {id: 1, meal: 'Beef Burger', ingredients: [
        { id: 1, name: 'Cheese', cost: 1.50 },
        { id: 2, name: 'Tomato', cost: 1.00 },
        { id: 3, name: 'Onion', cost: 0.75 },
        { id: 4, name: 'Beef Patty', cost: 3.75 }
      ]
    },
    {id: 2, meal: 'Cheese Burger', ingredients: [
        { id: 1, name: 'Cheese', cost: 1.50 },
        { id: 2, name: 'Tomato', cost: 1.00 },
        { id: 3, name: 'Onion', cost: 0.75 },
        { id: 4, name: 'Beef Patty', cost: 3.75 }
      ]
    }
  ])
  const [newItem, setNewItem] = useState('')

	const addItem = (event) => {
		event.preventDefault()
		const itemObject = {
			id: items.length +1,
			meal: newItem,
			ingredients: []

		}
		setItems(items.concat(itemObject))
		setNewItem('')
	}

	const handleItemChange = (event) => {
		console.log(event.target.value)
		setNewItem(event.target.value)
	}
  return(
    <div>
      <h2> Joe's Burger Joint </h2>
      {items.map(item => <Recipes key={item.id} item={item} />)}
	  <form onSubmit={addItem}>
	  	<label>Meal Name</label>
	  	<input
			value={newItem}
			onChange={handleItemChange}
		/>
		<button type="submit">Add Meal</button>
		</form>
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)
