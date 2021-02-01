import React from 'react';
import restaurantService from './services'

const DestroyIngredients = ( {ingredients, id, items, setItems, forceUpdate, ingr_id} ) => {

  const destroyIngredient = (event) => {
    console.log(ingr_id)
    const msg = `Do you really want to delete this?`

    if (window.confirm(msg) === true) {

      const destroyIngredientHook = () => {
        restaurantService
          .destroyIngredientItem(id, ingr_id, items)
          .then(ingredientList => {
            console.log(ingredientList)
            items[id-1].ingredients = ingredientList.filter(i => i.id !== ingr_id)
            setItems(items)
            forceUpdate()
          })
      }
      destroyIngredientHook()
    }
  }

  return(
      <button onClick={destroyIngredient} className="btn btn-lg btn-outline-danger ml-4">
        -
      </button>
  )
}


export default DestroyIngredients
