import React from 'react';

const DestroyIngredients = ( {ingredients, id, items, setItems, forceUpdate, ingr_id} ) => {

  const destroyIngredient = (event) => {
    console.log(ingr_id)
    const msg = `Do you really want to delete this?`

    if (window.confirm(msg) === true) {
      var copy_data = items
      copy_data[id-1].ingredients = copy_data[id-1].ingredients.filter(i => i.id !== ingr_id)
      console.log(copy_data)
      setItems(copy_data)
      forceUpdate()
    }
  }

  return(
      <button onClick={destroyIngredient} className="btn btn-lg btn-outline-danger ml-4">
        -
      </button>
  )
}


export default DestroyIngredients
