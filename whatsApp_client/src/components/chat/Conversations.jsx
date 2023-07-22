import React from 'react'
import Conversation from './Conversation'
import { Box, Divider, styled } from '@mui/material'

// const users = [
//   {
//     id: 1,
//     name: 'Readul Islam',
//     image:
//       'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg',
//   },
//   {
//     id: 2,
//     name: 'Himanshu Yaduv',
//     image:
//       'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg',
//   },
//   {
//     id: 3,
//     name: 'Manu Yaduv',
//     image:
//       'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg',
//   },
// ]

const Container = styled(Box)(({ theme }) => ({
  height: '81vh',
  overflow: 'overlay',
}))
const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: '0 0 0 70px',
  backgroundColor: '#e9edef',
  opacity: 0.5,
}))

const Conversations = ({ setSelectedUser, users }) => {
  const handler = (user) => {
    setSelectedUser(user)
    console.log('====================================')
    console.log('hhh')
    console.log('====================================')
  }
  return (
    <Container>
      {users.map((user) => (
        <Box key={user._id} onClick={() => handler(user)}>
          <Conversation user={user} />
          <StyledDivider />
        </Box>
      ))}
    </Container>
  )
}

export default Conversations
