import axios from 'axios'

const api = axios.create({
  baseURL: 'https://recipes.server.nativecode.com.br',
})

export default api
