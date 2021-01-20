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

const createIngredientItem = (menuItem_id, newObject) => {
  const response = axios.post('http://localhost:3001/restaurant/1', newObject)
  console.log(axios.post('http://localhost:3001/restaurant/1', 1))
  return response.then(response => response.data.ingredients)
}

const services = {
  getAll,
  createMenuItem,
  createIngredientItem
 }

export default services
