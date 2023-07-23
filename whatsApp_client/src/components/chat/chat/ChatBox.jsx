import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Box } from '@mui/material'

const ChatBox = ({ selectedUser, conversationId }) => {
  return (
    <Box style={{ height: '75%' }}>
      <ChatHeader selectedUser={selectedUser} />
      <Messages selectedUser={selectedUser} conversationId={conversationId} />
    </Box>
  )
}

export default ChatBox
