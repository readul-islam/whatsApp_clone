import { AppBar, Box, Toolbar, styled } from '@mui/material'
import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './chat/ChatDialog'
import { useCookies } from 'react-cookie'
import { isEmpty } from 'lodash'

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
  const [cookies, setCookie] = useCookies(['user'])
  console.log(cookies)
  // console.log(userInfo)
  if (isEmpty(cookies)) {
    console.log('I will print')
  }

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
