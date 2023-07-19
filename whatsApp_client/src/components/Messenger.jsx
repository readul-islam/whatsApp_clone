import { AppBar, Box, Toolbar, styled } from '@mui/material'
import React from 'react'
import LoginDialog from './account/LoginDialog'

const Container = styled(Box)`
  height: 100vh;
  background: #f0f2f5;
`

const Header = styled(AppBar)`
  height: 180px;
  background: #00a884;
  box-shadow: none;
`

const Messenger = () => {
  return (
    <Container>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Container>
  )
}

export default Messenger
