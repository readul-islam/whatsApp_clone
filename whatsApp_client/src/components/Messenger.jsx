import { AppBar, Box, Toolbar, styled } from '@mui/material'
import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './chat/ChatDialog'

const Container = styled(Box)`
  height: 100vh;
  background: #f0f2f5;
`

const AuthPageHeader = styled(AppBar)`
  height: 180px;
  background: #00a884;
  box-shadow: none;
`
const Header = styled(AppBar)`
  height: 125px;
  background: #00a884;
  box-shadow: none;
`

const Messenger = () => {
  const { userInfo } = useContext(AccountContext)
  console.log(userInfo)
  return (
    <>
      {userInfo ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <Container>
            <AuthPageHeader>
              <Toolbar></Toolbar>
            </AuthPageHeader>
            <LoginDialog />
          </Container>
        </>
      )}
    </>
  )
}

export default Messenger
