import React, { useState } from 'react';

const Recipes = ( {item} ) => {
  console.log({item})

  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)

  return(
    <div>
      <h4> {item.meal} </h4>
      <input type="submit" value="Reveal Ingredients" onClick={onClick} />
      { showResults ?
        <div>
        <ul>
          {item.ingredients.map(ingredient =>
            <li key={ingredient.id}> {ingredient.name}: ${twoDP(ingredient.cost)} </li>
          )}
        </ul>
        <SumCost ingredients={item.ingredients} /> </div>
      : null }
    </div>
  )
}

const twoDP = (num) => (Math.round(num * 100) / 100).toFixed(2)

const SumCost = ( {ingredients} ) => {
  const total = ingredients.reduce((accumulator, ingredient) => {
    return(accumulator + ingredient.cost)
  },0)
  return(
    <p> Total cost of ingredients: ${twoDP(total)} </p>
  )
}

export default Recipes
