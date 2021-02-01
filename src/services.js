import axios from 'axios'

const baseUrl = 'http://localhost:3001/restaurant'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createMenuItem = (newObject) => {
  const response = axios.post(baseUrl, newObject)

  return response.then(response => response.data)
}

const createIngredientItem = (id, newObject, items) => {

  const ingredientPatch = (ingredientList, newObject) => ingredientList.concat(newObject)

  const response = axios
                    .patch(`${baseUrl}/${id}`, {ingredients:ingredientPatch(items[id-1].ingredients, newObject)})
  console.log(response)
  return response.then(response => response.data.ingredients)
}

const services = {
  getAll,
  createMenuItem,
  createIngredientItem
 }

export default services
