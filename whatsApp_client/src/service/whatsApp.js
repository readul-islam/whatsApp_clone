// instance
import axios from 'axios'

const BaseUrl = 'https://whatsapp-d36t.onrender.com/api/v1/'

const whatsApp = axios.create({
  baseURL: BaseUrl,
  timeout: 1000,
})

export const commonThenResult = (result) => result.data

export const status = {
  FAILED: 'fail',
  SUCCESS: 'success',
}

export default whatsApp
