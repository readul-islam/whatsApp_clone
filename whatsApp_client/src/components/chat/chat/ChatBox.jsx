import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Box } from '@mui/material'

const ChatBox = () => {
  return (
    <Box style={{height:'75%'}}>
      <ChatHeader/>
      <Messages/>
    </Box>
  )
}

export default ChatBox
