import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, ingredient: 'Cheese', price: '$1.50' },
    { id: 2, ingredient: 'Tomato', price: '$1.00' },
    { id: 3, ingredient: 'Onion', price: '$0.75' },
    { id: 4, ingredient: 'Beef Patty', price: '$3.50' }
  ])

  const itemList = items.map(item => <li key={item.id}> {item.ingredient} {item.price} </li>)

  return(
    <div>
      <h2> Joe's Burgers </h2>
      <div> {itemList} </div>
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)
