import initAxios from 'axios'

// let API_URL = process.env.API_URL || ''
let API_URL = 'http://jsonplaceholder.typicode.com'

export const axios = initAxios.create({
  baseURL: API_URL
})
