import React, { createContext, useState } from 'react'

export const AccountContext = createContext(null)

const AccountProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  return (
    <AccountContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider
