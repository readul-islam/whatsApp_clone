import { AppBar, Box, Toolbar, styled } from '@mui/material'
import { isEmpty } from 'lodash'
import React, { useContext } from 'react'
import { useCookies } from 'react-cookie'
import { AccountContext } from '../context/AccountProvider'
import LoginDialog from './account/LoginDialog'
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
  const [cookies, setCookie,removeCookie] = useCookies(['user'])


  return (
    <>
      {isEmpty(cookies.user) ? (
        <>
          {/* chat page or main page */}
          <Container>
            <AuthPageHeader>
              <Toolbar></Toolbar>
            </AuthPageHeader>
            <LoginDialog />
          </Container>
        </>
      ) : (
        <>
          {/* simple Login page */}

          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      )}
    </>
  )
}

export default Messenger
