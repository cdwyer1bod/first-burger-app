import React, {useState} from 'react';

const AddToIngredients = ( {ingredients, id, items, setItems, forceUpdate} ) => {

  const [ newIngredientName, setNewIngredientName ] = useState('')
  const [ newIngredientCost, setNewIngredientCost ] = useState('')
  const [ newIngredientQuantity, setNewIngredientQuantity ] = useState('')
  const [ updatedIngredientName, setUpdatedIngredientName ] = useState('')
  const [ updatedIngredientCost, setUpdatedIngredientCost ] = useState('')
  const [ updatedIngredientQuantity, setUpdatedIngredientQuantity ] = useState('')

  const addIngredient = (event) => {
    event.preventDefault()
    const newIngredientObject = {
      id: ingredients.length + 1,
      name: newIngredientName,
      cost: newIngredientCost,
      quantity: newIngredientQuantity
    }
    console.log(`http://localhost:3001/restaurant/${id}`)
    items[id-1].ingredients = items[id-1].ingredients.concat(newIngredientObject)
    setItems(items)
    setNewIngredientName('')
	  setNewIngredientCost('')
    setNewIngredientQuantity('')
    forceUpdate()

  }


  const updateIngredientCost = (event) => {
	  event.preventDefault()
	  var id_selected = ingredients.filter(ingredient => ingredient.name === updatedIngredientName)[0].id
	  const updatedIngredientObject = {
		  id: ingredients.filter(ingredient => ingredient.name === updatedIngredientName)[0].id,
		  name: updatedIngredientName,
		  cost: Number(updatedIngredientCost),
      quantity: Number(updatedIngredientQuantity)
	  }
	  setItems(items)
	  setUpdatedIngredientName('')
	  setUpdatedIngredientCost('')
    setUpdatedIngredientQuantity('')

	  ingredients[id_selected-1].cost = updatedIngredientObject.cost
    ingredients[id_selected-1].quantity = updatedIngredientObject.quantity

	  forceUpdate()

  }

  const handleNewIngredientNameChange = (event) => setNewIngredientName(event.target.value)
  const handleNewIngredientCostChange = (event) => setNewIngredientCost(event.target.value)
  const handleNewIngredientQuantityChange = (event) => setNewIngredientQuantity(event.target.value)
  const handleUpdatedIngredientNameChange = (event) => setUpdatedIngredientName(event.target.value)
  const handleUpdatedIngredientCostChange = (event) => setUpdatedIngredientCost(event.target.value)
  const handleUpdatedIngredientQuantityChange = (event) => setUpdatedIngredientQuantity(event.target.value)

  return(
    <div>
      <h4>Add Ingredient</h4>
      <form onSubmit={addIngredient}>

        <label>Name:</label>
        <input
        value={newIngredientName}
        onChange={handleNewIngredientNameChange}
        />

        <label>Cost:</label>
        <input
        value={newIngredientCost}
        onChange={handleNewIngredientCostChange}
        />

        <label>Quantity:</label>
        <input
        value={newIngredientQuantity}
        onChange={handleNewIngredientQuantityChange}
        />

        <button type="submit">Add Ingredient</button>
      </form>

    <h4>Update Ingredient Information:</h4>
    <form onSubmit={updateIngredientCost}>

      <label>Name: </label>
      <input
      value={updatedIngredientName}
      onChange={handleUpdatedIngredientNameChange}
      />

      <label>Cost: </label>
      <input
      value={updatedIngredientCost}
      onChange={handleUpdatedIngredientCostChange}
      />

      <label>Quantity: </label>
      <input
      value={updatedIngredientQuantity}
      onChange={handleUpdatedIngredientQuantityChange}
      />

      <button type="submit">Update Ingredient Info</button>

    </form>
  </div>
)}

export default AddToIngredients
