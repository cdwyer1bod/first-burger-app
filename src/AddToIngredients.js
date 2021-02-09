import React, {useState} from 'react';
import restaurantService from './services'

const AddToIngredients = ( {ingredients, id, items, setItems, forceUpdate} ) => {

  const quantityTypes = ['g', 'mL', 'units']

  const [ newIngredientName, setNewIngredientName ] = useState('')
  const [ newIngredientCost, setNewIngredientCost ] = useState('')
  const [ newIngredientQuantity, setNewIngredientQuantity ] = useState('')
  const [ newQuantityType, setNewQuantityType ] = useState('')
  const [ updatedIngredientName, setUpdatedIngredientName ] = useState('')
  const [ updatedIngredientCost, setUpdatedIngredientCost ] = useState('')
  const [ updatedIngredientQuantity, setUpdatedIngredientQuantity ] = useState('')

  const addIngredient = (event) => {
    event.preventDefault()
    const newIngredientObject = {
      id: ingredients.length + 1,
      name: newIngredientName,
      cost: newIngredientCost,
      quantityType: newQuantityType,
      quantity: newIngredientQuantity
    }

    const ingredientAdd = () => {
      restaurantService.createIngredientItem(id, newIngredientObject, items)
      .then(newIngredientList => {
        console.log(newIngredientList)
        const newIngredient = newIngredientList[newIngredientList.length - 1]
        items[id-1].ingredients = items[id-1].ingredients.concat(newIngredient)
        setItems(items)
        setNewIngredientName('')
    	  setNewIngredientCost('')
        setNewQuantityType('')
        setNewIngredientQuantity('')
        forceUpdate()
      })
      .catch(error => {console.log(error)})
    }

    ingredientAdd()

  }

  const updateIngredientCost = (event) => {
	  event.preventDefault()
	  var ingr_id = ingredients.filter(ingredient => ingredient.name === updatedIngredientName)[0].id
	  const updatedIngredientObject = {
		  id: ingr_id,
		  name: updatedIngredientName,
		  cost: Number(updatedIngredientCost),
      quantity: Number(updatedIngredientQuantity)
	  }

    const updateIngredientInformationHook = () => {
      restaurantService
        .updateIngredientInformation(id, ingr_id, items, updatedIngredientObject.cost, updatedIngredientObject.quantity)
        .then(ingredients => {
          items[id-1].ingredients = ingredients
          setItems(items)
      	  setUpdatedIngredientName('')
      	  setUpdatedIngredientCost('')
          setUpdatedIngredientQuantity('')
          forceUpdate()
        })
    }

    updateIngredientInformationHook()
  }

  const handleNewIngredientNameChange = (event) => setNewIngredientName(event.target.value)
  const handleNewIngredientCostChange = (event) => setNewIngredientCost(event.target.value)
  const handleNewIngredientQuantityChange = (event) => setNewIngredientQuantity(event.target.value)
  const handleNewQuantityType = (event) => setNewQuantityType(event.target.value)
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

        <select
          value={newQuantityType}
          onChange={handleNewQuantityType}
        >
          <option> Select Type </option>
          {quantityTypes.map(type => {return(
          <option> {type} </option>
           )})}
        </select>

        <button type="submit">Add Ingredient</button>
      </form>

    <h4>Update Ingredient Information:</h4>
    <form onSubmit={updateIngredientCost}>

      <label>Name: </label>

      <select
        value={updatedIngredientName}
        onChange={handleUpdatedIngredientNameChange}
      >
        <option> Select Ingredient </option>
        {ingredients.map(ingredient => {return(
        <option key={ingredient.id} value={ingredient.name}>{ingredient.name}
        </option>
         )})}

      </select>


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
