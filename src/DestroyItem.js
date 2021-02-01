import React from 'react';
import restaurantService from './services'

const DestroyItem = ( {item_id, items, setItems, forceUpdate} ) => {

  const destroyItem = (event) => {
    console.log(item_id)
    const msg = `Do you really want to delete this?`

    if (window.confirm(msg) === true) {
      const deleteItem = () => {
        restaurantService
          .destroyMenuItem(item_id)
          .then(destroyedItem => {
            setItems(items.filter(i => i.id !== item_id))
            forceUpdate()
          })
      }
      deleteItem()
    }
  }

  return(
      <button onClick={destroyItem} className="btn btn-lg btn-outline-danger ml-4">
        -
      </button>
  )
}


export default DestroyItem
