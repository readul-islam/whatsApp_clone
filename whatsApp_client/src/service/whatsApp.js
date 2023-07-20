// instance
import axios from 'axios'

const whatsApp = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
})

export const commonThenResult = (result) => result.data

export default whatsApp
