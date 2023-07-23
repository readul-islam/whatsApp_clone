import React, { createContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import { Auth } from '../components/Messenger'
export const AccountContext = createContext(null)

const AccountProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  const [activeUser, setActiveUser] = useState([])
  const [selectedConversation, SetSelectedConversation] = useState({})

  const socket = useRef()
  useEffect(() => {
    socket.current = io('ws://whatsapp-socket-i0ap.onrender.com')
  }, [Auth])
  return (
    <AccountContext.Provider
      value={{
        userInfo,
        setUserInfo,
        socket,
        setActiveUser,
        activeUser,
        SetSelectedConversation,
        selectedConversation,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider
