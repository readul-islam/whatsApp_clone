import axios from 'axios'
import whatsApp, { commonThenResult } from './whatsApp'

const END_POINTS = {
  REGISTER: () => 'user/register',
  LOGIN: () => 'user/login',
}

export const userRegister = async (authInfo) => {
  try {
    const res = await whatsApp.post(END_POINTS.REGISTER(), authInfo)
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
