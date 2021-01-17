import React, {useState} from 'react';

const AddToIngredients = ( {ingredients, id, items, setItems, forceUpdate} ) => {

  const [ newIngredientName, setNewIngredientName ] = useState('')
  const [ newIngredientCost, setNewIngredientCost ] = useState('')
  const [ updatedIngredientName, setUpdatedIngredientName ] = useState('')
  const [ updatedIngredientCost, setUpdatedIngredientCost ] = useState('')


  const addIngredient = (event) => {
    event.preventDefault()
    const newIngredientObject = {
      id: ingredients.length + 1,
      name: newIngredientName,
      cost: newIngredientCost,
    }

    console.log(ingredients)
    console.log('This is the item passed in: ', items[id-1])
    console.log('This is the list of ingredients: ', items[id-1].ingredients.concat(newIngredientObject))
    items[id-1].ingredients = items[id-1].ingredients.concat(newIngredientObject)
    console.log(items)
    setItems(items)
    setNewIngredientName('')
	setNewIngredientCost('')
    forceUpdate()
  }


  const updateIngredientCost = (event) => {
	  event.preventDefault()
	  console.log("ID SELECTED", ingredients.filter(ingredient => ingredient.name === updatedIngredientName)[0].id)
	  var id_selected = ingredients.filter(ingredient => ingredient.name === updatedIngredientName)[0].id
	  const updatedIngredientObject = {
		  id: ingredients.filter(ingredient => ingredient.name === updatedIngredientName)[0].id,
		  name: updatedIngredientName,
		  cost: Number(updatedIngredientCost),
	  }
	  setItems(items)
	  setUpdatedIngredientName('')
	  setUpdatedIngredientCost('')

	  ingredients[id_selected-1].cost = updatedIngredientObject.cost

	  forceUpdate()


	  console.log(updatedIngredientObject)
	  console.log("Ingredient selected: ",ingredients[id_selected-1])
	  console.log(items)


  }

  const handleNewIngredientNameChange = (event) => {
    const target = event.target
    setNewIngredientName(target.value)
  }

  const handleNewIngredientCostChange = (event) => {
	const target = event.target
	setNewIngredientCost(target.value)
  }

  const handleUpdatedIngredientNameChange = (event) => {
	const target = event.target
	setUpdatedIngredientName(target.value)
  }

  const handleUpdatedIngredientCostChange = (event) => {
  const target = event.target
  setUpdatedIngredientCost(target.value)
  }

  return(
    <div>
	<h4>Add Ingredient</h4>
      <form onSubmit={addIngredient}>
	  <label>Name of Ingredient </label>
        <input
        value={newIngredientName}
        onChange={handleNewIngredientNameChange}
      />
	  <label>Cost of Ingredient </label>
	  <input
	  value={newIngredientCost}
	  onChange={handleNewIngredientCostChange}
	  />
      <button type="submit">Add Ingredient</button>
      </form>

	  <h4>Update Ingredient Cost</h4>
		 <form onSubmit={updateIngredientCost}>
		<label>Name of Ingredient </label>
		   <input
		   value={updatedIngredientName}
		   onChange={handleUpdatedIngredientNameChange}
		 />
		<label>New Cost of Ingredient </label>
		<input
		value={updatedIngredientCost}
		onChange={handleUpdatedIngredientCostChange}
		/>
		 <button type="submit">Update Ingredient Cost</button>
		 </form>
    </div>
  )

}

export default AddToIngredients
