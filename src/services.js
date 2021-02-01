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

const createIngredientItem = (id, newObject) => {
  const response = axios.post(`${baseUrl}/${id}`, newObject)
  console.log(response)
  return response.then(response => response.data)
}

const services = {
  getAll,
  createMenuItem,
  createIngredientItem
 }

export default services
