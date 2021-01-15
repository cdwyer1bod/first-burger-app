import React, {useState} from 'react';

const AddToIngredients = ( {ingredients, id, items, setItems, forceUpdate} ) => {

  const [ newIngredient, setNewIngredient ] = useState('')

  const addIngredient = (event) => {
    event.preventDefault()
    const newIngredientObject = {
      id: ingredients.length + 1,
      name: newIngredient,
      cost: 1
    }

    console.log('This is the item passed in: ', items[id-1])
    console.log('This is the list of ingredients: ', items[id-1].ingredients.concat(newIngredientObject))
    items[id-1].ingredients = items[id-1].ingredients.concat(newIngredientObject)
    setItems(items)
    setNewIngredient('')
    forceUpdate()
  }

  const handleIngredientChange = (event) => {
    const target = event.target
    setNewIngredient(target.value)
  }

  return(
    <div>
      <form onSubmit={addIngredient}>
        <input
        value={newIngredient}
        onChange={handleIngredientChange}
      />
      <button type="submit">Add Ingredient</button>
      </form>
    </div>
  )

}

export default AddToIngredients
