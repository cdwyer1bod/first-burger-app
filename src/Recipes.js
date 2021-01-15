import React, {useState} from 'react';
import AddToIngredients from './AddToIngredients'
import DestroyIngredients from './DestroyIngredients'

const Recipes = ( { item, items, setItems } ) => {

  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  const useForceUpdate = () => {
    const set = useState(0)[1];
    return () => set((s) => s + 1);
  };

  const forceUpdate = useForceUpdate();

  return(
    <div>
      <h4> {item.meal} </h4>
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
              {ingredient.name}: ${twoDP(ingredient.cost)}
            </li>
          )}
          )}
        </ul>
        <SumCost ingredients={item.ingredients}/> </div>
      : null }
    </div>
  )
}

const twoDP = (num) => (Math.round(num * 100) / 100).toFixed(2)

const SumCost = ( {ingredients } ) => {
  const total = ingredients.reduce((accumulator, ingredient) => {
    return(accumulator + ingredient.cost)
  },0)
  return(
    <p> Total cost of ingredients: ${twoDP(total)}</p>
  )
}

export default Recipes
