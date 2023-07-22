import { Box, Dialog, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
import { getAllUsers } from '../../service/api'
import { useCookies } from 'react-cookie'
import { decryptedData } from '../../utils/hooks'

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& 	.MuiDialog-paper': {
    height: '95%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: '20px',
    overflow: 'hidden',
    borderRadius: 0,

    // [theme.breakpoints.down('md')]: {
    //   height: '90%',
    //   width: '100%',
    // },
    // [theme.breakpoints.down('lg')]: {
    //   height: '90%',
    //   width: '80%',
    // },
  },
}))

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}))

const MenuContainer = styled(Box)(({ theme }) => ({
  minWidth: '450px',
  height: '100%',
}))

const ChatContainer = styled(Box)(({ theme }) => ({
  width: '75%',
  minWidth: '300px',
  hight: '100%',
  borderLeft: '1px solid rgba(0,0,0,0.14) ',
}))

const ChatDialog = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [users, setUsers] = useState([])
  console.log(selectedUser)
  useEffect(() => {
    const user = decryptedData(cookies.user)
    console.log(user)
    const fetchData = async () => {
      const users = await getAllUsers(user.id)
      
      if (users?.data) {
        setUsers(users.data)
      }
    }
    fetchData()
  }, [])
console.log(users)
  return (
    <CustomDialog maxWidth={'md'} hideBackdrop open={true}>
      <Container>
        <MenuContainer>
          <Menu users={users} setSelectedUser={setSelectedUser} />
        </MenuContainer>
        <ChatContainer>
          {selectedUser ? <ChatBox /> : <EmptyChat />}
        </ChatContainer>
      </Container>
    </CustomDialog>
  )
}

export default ChatDialog
