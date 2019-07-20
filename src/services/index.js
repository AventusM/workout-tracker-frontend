import axios from 'axios'

const getAll = async (baseUrl) => {
  const response = await axios.get(baseUrl, { validateStatus: function (status) { return status < 500 } })
  return response.data
}

const create = async (baseUrl, payload) => {
  const response = await axios.post(baseUrl, payload)
  return response.data
}

export default { getAll, create }