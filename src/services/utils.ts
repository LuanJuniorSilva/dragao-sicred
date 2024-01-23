import axios from 'axios'

const apiLogin = axios.create({
  baseURL: 'https://apitestedragon.herokuapp.com/',
})

const apiDefault = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
})

export { apiLogin, apiDefault }