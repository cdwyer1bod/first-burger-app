import React, {useState} from 'react';
import AddToIngredients from './AddToIngredients'
import DestroyIngredients from './DestroyIngredients'
import DestroyItem from './DestroyItem'

const Recipes = ( { item, items, setItems } ) => {

  const [showResults, setShowResults] = useState(false)
  const [updatedItemPrice, setUpdatedItemPrice] = useState('')

  const onClick = () => setShowResults(!showResults)

  const useForceUpdate = () => {
    const set = useState(0)[1];
    return () => set((s) => s + 1);
  };
  const forceUpdate = useForceUpdate();

  const updateItemPrice = (event) => {
  	event.preventDefault()
  	const updatedItemPriceObject = {
  		id: item.id,
  		meal: item.meal,
  		price:Number(updatedItemPrice),
  		ingredients:item.ingredients,
	   }

	items[item.id-1] = updatedItemPriceObject
	setUpdatedItemPrice('')
	forceUpdate()
  }

	const handleItemPriceChange = (event) => setUpdatedItemPrice(event.target.value)

  return(
    <div>
      <h4> <DestroyItem item_id={item.id} items={items} setItems={setItems} forceUpdate={forceUpdate} /> {item.meal} </h4>
  	  <p> Price: ${twoDP(item.price)} </p>
    	  <form onSubmit={updateItemPrice}>
    	  	<label>Update Item Price</label>
    	  	<input
    			value={updatedItemPrice}
    			onChange={handleItemPriceChange}
    		/>
    		<button type="submit">Update</button>
    		</form>
      <ProfitMargin item={item} ingredients={item.ingredients}/>

      <input type="submit" value="Reveal Ingredients" onClick={onClick} />

      { showResults ?
        <div>
          <AddToIngredients ingredients={item.ingredients} id={item.id} items={items}
                            setItems={setItems} forceUpdate={forceUpdate} />
          <ul>
            {item.ingredients.map(ingredient => { return(
              <li key={ingredient.id}>

                {<DestroyIngredients ingredients={item.ingredients} id={item.id} items={items}
                setItems={setItems} forceUpdate={forceUpdate} ingr_id={ingredient.id}/>}

                {ingredient.name} x {ingredient.quantity}: ${twoDP(ingredient.cost)}
              </li> )}
            )}
          </ul>
        <SumCost ingredients={item.ingredients}/> </div>

      : null }

    </div>
  )
}

const twoDP = (num) => (Math.round(num * 100) / 100).toFixed(2)

const ProfitMargin = ({item, ingredients}) => {
	var cost = ingredients.reduce((accumulator, ingredient) => {
      return(accumulator + Number(ingredient.cost))
    },0)
	var price= item.price
	return <p>Profit Margin: ${twoDP(price-cost)}</p>
}

const SumCost = ( {ingredients } ) => {
  var total = ingredients.reduce((accumulator, ingredient) => {
    return(accumulator + Number(ingredient.cost))
  },0)
  return <p> Total cost of ingredients: ${twoDP(total)}</p>
}

export default Recipes
