import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes'

const twoDP = (num) => (Math.round(num * 100) / 100).toFixed(2)

const App = () => {
  const [items, setItems] = useState([
    {id: 1, meal: 'Beef Burger', ingredients: [
        { id: 1, name: 'Cheese', price: 1.50 },
        { id: 2, name: 'Tomato', price: 1.00 },
        { id: 3, name: 'Onion', price: 0.75 },
        { id: 4, name: 'Beef Patty', price: 3.75 }
      ]
    },
    {id: 2, meal: 'Cheese Burger', ingredients: [
        { id: 1, name: 'Cheese', price: 1.50 },
        { id: 2, name: 'Tomato', price: 1.00 },
        { id: 3, name: 'Onion', price: 0.75 },
        { id: 4, name: 'Beef Patty', price: 3.75 }
      ]
    }
  ])


  return(
    <div>
      <h2> Joe's Burger Joint </h2>
      {items.map(item => <Recipes key={item.id} item={item} />)}
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)
