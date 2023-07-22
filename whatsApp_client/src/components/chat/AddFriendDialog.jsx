import {
  Avatar,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import WhatsAppIcon from '../../assets/react.svg'
import FormInput from '../FormInput'
import Search from './Search'
import CancelIcon from '@mui/icons-material/Cancel'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { createConversation, searchUser } from '../../service/api'
import { decryptedData, showToastByStatus } from '../../utils/hooks'
import { useCookies } from 'react-cookie'
import { status } from '../../service/whatsApp'

const AddFriendContainer = styled(Dialog)(({ theme }) => ({
  '& 	.MuiDialog-paper': {
    height: '65%',
    width: '28%',
    maxHeight: '100%',
    maxWidth: '100%',
    // margin: '20px',
    overflow: 'hidden',
    borderRadius: 3,
    position: 'relative',
  },
}))

const cancelIconStyle = {
  position: 'absolute',
  right: 9,
  top: 8,
  color: '#c2cad6',
  fontSize: 27,
  cursor: 'pointer',
}

const UserContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '45px',
  padding: '10px 13px',
  marginBottom: '8px',
  cursor: 'pointer',
  backgroundColor: '#f2f2f2',
  borderRadius: '10px',
  alignItems: 'center',
  position: 'relative',
}))
const Container = styled(Box)(({ theme }) => ({
  padding: '0 45px 0px 25px',
}))

const Image = styled('img')(({ theme }) => ({
  width: '50px',
  height: '50px',
  padding: '0 14px',
  borderRadius: '50%',
}))
const CustomButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: 10,
  top: 15,
  padding: '3px 10px',

  border: '1px solid #00a884',
  color: '#00a884',
  fontWeight: 600,
}))

const AddFriendDialog = ({ addFriend, setAddFriend }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [users, setUsers] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const user = decryptedData(cookies.user)
  const notFoundMessage = 'user not found'
  const onKeyUpHandler = (e) => {
    if (e.target.value.length < 2) return
    console.log(e.target.value.length)
    setTimeout(() => {
      setSearchQuery(e.target.value)
    }, 1000)
  }
  // searching for connecting
  useEffect(() => {
    const fetchData = async () => {
      const users = await searchUser(searchQuery)
      if (users.data.length > 0) {
        setUsers(users.data)
      } else {
      }
    }
    console.log(searchQuery)
    fetchData()
  }, [searchQuery])

  // create a new conversions
  const addFriendHandler = async (participant) => {
    const payload = {
      creator: {
        id: user.id,
        userName: user.userName,
        image: user.image,
      },
      participant: {
        id: participant._id,
        userName: participant.userName,
        image: participant.image,
      },
    }
    const connect = await createConversation(payload)
    console.log(connect)
    showToastByStatus(connect)
    if (connect.status === status.SUCCESS) {
      setAddFriend(false)
    }
  }
  return (
    <>
      <AddFriendContainer open={addFriend}>
        <HighlightOffIcon
          onClick={() => setAddFriend(false)}
          sx={cancelIconStyle}
        />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingX: '20px',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar
              sx={{ margin: 1, width: 50, height: 50 }}
              src={WhatsAppIcon}
            />
          </Box>
          <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#758a7a' }}>
            Add Friend
          </Typography>
          <Typography
            sx={{ color: '#91a195', fontSize: 14, fontStyle: 'italic' }}
          >
            Search your friend name, email
          </Typography>
        </Box>
        <Box sx={{ paddingX: 1, marginTop: 0.5 }}>
          <Search onKeyDown={onKeyUpHandler} />
        </Box>

        <Box sx={{ marginTop: 4, overflowY: 'auto', pb: 2 }}>
          {users &&
            users.map((user) => (
              <Container>
                <UserContainer>
                  <Image src={`http://localhost:8080/${user.image}`} />
                  <Typography>{user.userName}</Typography>
                  <CustomButton
                    onClick={() => addFriendHandler(user)}
                    variant='outlined'
                  >
                    connect
                  </CustomButton>
                </UserContainer>
              </Container>
            ))}
        </Box>
      </AddFriendContainer>
    </>
  )
}

export default AddFriendDialog
