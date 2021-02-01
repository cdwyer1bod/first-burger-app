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
  const response = axios
                    .patch(`${baseUrl}/${id}`, {ingredients:items[id-1].ingredients.concat(newObject)})
  console.log(response)
  return response.then(response => response.data.ingredients)
}

const destroyMenuItem = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const destroyIngredientItem = (id, ingr_id, items) => {
  const response = axios.patch(`${baseUrl}/${id}`, {ingredients:items[id-1].ingredients.filter(i => i.id !== ingr_id)})
  console.log(response)
  return(response.then(response => response.data.ingredients))
}

const services = {
  getAll,
  createMenuItem,
  createIngredientItem,
  destroyMenuItem,
  destroyIngredientItem
 }

export default services
