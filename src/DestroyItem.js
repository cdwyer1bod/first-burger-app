import React from 'react';

const DestroyItem = ( {item_id, items, setItems, forceUpdate} ) => {

  const destroyItem = (event) => {
    console.log(item_id)
    const msg = `Do you really want to delete this?`

    if (window.confirm(msg) === true) {
      var copy_data = items
      copy_data = copy_data.filter(i => i.id !== item_id)
      console.log(copy_data)
      setItems(copy_data)
      forceUpdate()
    }
  }

  return(
      <button onClick={destroyItem} className="btn btn-lg btn-outline-danger ml-4">
        -
      </button>
  )
}


export default DestroyItem
