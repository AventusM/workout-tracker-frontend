import axios from 'axios'
const baseUrl = '/api/workouts'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (payload) => {
  const response = await axios.post(baseUrl, payload)
  return response.data
}

export default { getAll, create }