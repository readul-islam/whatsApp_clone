import axios from 'axios'
import whatsApp, { commonThenResult } from './whatsApp'

const END_POINTS = {
  REGISTER: () => 'user/register',
  LOGIN: () => 'user/login',
}
// register user
export const userRegister = async (authInfo) => {
  try {
    const res = await whatsApp.post(END_POINTS.REGISTER(), authInfo)
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
//  login user
export const userLogin = async (authInfo) => {
  try {
    const res = await whatsApp.get(END_POINTS.LOGIN(), authInfo)
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
