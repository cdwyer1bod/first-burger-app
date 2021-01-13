import React from 'react';

const Recipes = ( {item} ) => {
  console.log({item})
  return(
    <div>
      <h4> {item.meal} </h4>
      <ul>
        {item.ingredients.map(ingredient =>
          <li key={ingredient.id}> {ingredient.name}: ${twoDP(ingredient.cost)} </li>
        )}
      </ul>
      <SumCost ingredients={item.ingredients} />
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
