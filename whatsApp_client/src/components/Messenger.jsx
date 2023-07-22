import { AppBar, Box, Toolbar, styled } from '@mui/material'
import { isEmpty } from 'lodash'
import React, { useContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { AccountContext } from '../context/AccountProvider'
import LoginDialog from './account/LoginDialog'
import ChatDialog from './chat/ChatDialog'
import UpdateInfoDialog from './UpdateInfoDialog'
import { decryptedData } from '../utils/hooks'

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
export let Auth ;
const Messenger = () => {
  const { userInfo } = useContext(AccountContext)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [updateInfoDialogOpen, setUpdateInfoDialogOpen] = useState(false)


  Auth = decryptedData(cookies.user)


  return (
    <>
      {isEmpty(cookies.user) ? (
        <>
          {/* chat page or main page */}
          <Container>
            <AuthPageHeader>
              <Toolbar />
            </AuthPageHeader>
            <LoginDialog setUpdateInfoDialogOpen={setUpdateInfoDialogOpen} />
          </Container>
        </>
      ) : (
        <>
          {/* simple Login page */}

          <Header>
            <Toolbar />
          </Header>
          <ChatDialog />
          <UpdateInfoDialog
            updateInfoDialogOpen={updateInfoDialogOpen}
            setUpdateInfoDialogOpen={setUpdateInfoDialogOpen}
          />
        </>
      )}
    </>
  )
}

export default Messenger
