import React from 'react'
import Conversation from './Conversation'
import { Box, Divider, Typography, styled } from '@mui/material'
import { isEmpty } from 'lodash'

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

const emptyText = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',
}

const text = { fontSize: '24px', color: 'gray' }

const Conversations = ({
  setSelectedUser,
  myConversations,
  setConversationId,
}) => {
  return (
    <Container>
      {isEmpty(myConversations) ? (
        <Box sx={emptyText}>
          <Typography sx={text}>You haven't Conversation</Typography>
        </Box>
      ) : (
        myConversations.map((conversation) => (
          <Box
            key={conversation._id}
            onClick={() => setConversationId(conversation._id)}
          >
            <Conversation
              setSelectedUser={setSelectedUser}
              conversation={conversation}
            />
            <StyledDivider />
          </Box>
        ))
      )}
    </Container>
  )
}

export default Conversations
