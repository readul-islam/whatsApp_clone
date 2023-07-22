import axios from 'axios'
import whatsApp, { commonThenResult } from './whatsApp'

const END_POINTS = {
  REGISTER: () => 'user/register',
  LOGIN: () => 'user/login',
  GET_USERS: () => 'user/users',
  GET_USERINFO: () => 'user/update',
  SEARCH_USER: () => 'user/search',
  CREATE_CONVERSATION: () => 'conversation/add',
  GET_MY_CONVERSATION: () => 'conversation/my-conversation',
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
    const res = await whatsApp.get(END_POINTS.LOGIN(), { params: authInfo })
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
//  login user
export const getAllUsers = async (id) => {
  try {
    const res = await whatsApp.get(END_POINTS.GET_USERS(), { params: { id } })
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
//  update user information
export const updateUserInfo = async (formData) => {
  try {
    const res = await whatsApp.put(END_POINTS.GET_USERINFO(), formData)
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
//  search user
export const searchUser = async (searchQuery) => {
  try {
    const res = await whatsApp.get(END_POINTS.SEARCH_USER(), {
      params: { searchQuery },
    })
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
//  create new conversation
export const createConversation = async (bodyInfo) => {
  try {
    const res = await whatsApp.post(END_POINTS.CREATE_CONVERSATION(), bodyInfo)
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}

//  get all my conversation

export const getMyConversation = async (id) => {
  try {
    const res = await whatsApp.get(END_POINTS.GET_MY_CONVERSATION(), {
      params: { id },
    })
    return commonThenResult(res)
  } catch (error) {
    console.log(error)
  }
}
