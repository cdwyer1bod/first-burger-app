import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Meals = ( {item} ) => {
  console.log({item})
  return(
    <div>
      <h4> {item.meal} </h4>
      <ul>
        {item.ingredients.map(ingredient =>
          <li key={ingredient.id}> {ingredient.name}: ${twoDP(ingredient.price)} </li>
        )}
      </ul>
      <SumCost ingredients={item.ingredients} />
    </div>
  )
}

const twoDP = (num) => (Math.round(num * 100) / 100).toFixed(2)

const SumCost = ( {ingredients} ) => {
  const total = ingredients.reduce((accumulator, ingredient) => {
    return(accumulator + ingredient.price)
  },0)
  return(
    <p> Total cost of ingredients: ${twoDP(total)} </p>
  )
}

const App = () => {
  const [items, setItems] = useState([
    {id: 1, meal: 'Beef Burger', ingredients: [
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
      {items.map(item => <Meals key={item.id} item={item} />)}
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)
