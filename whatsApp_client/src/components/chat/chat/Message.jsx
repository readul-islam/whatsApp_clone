import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { formatDate } from '../../../utils/hooks'
import { Auth } from '../../Messenger'
import styled from 'styled-components'

const Wrapper = styled(Box)`
  background: #ffffff;
  padding: 5px;
  max-width: 60%;
  width: fit-content;
  display: flex;
  border-radius: 4px;
  word-break: break-word;
`

const Own = styled(Box)`
  background: #dcf8c6;
  padding: 5px;
  max-width: 60%;
  width: fit-content;
  margin-left: auto;
  display: flex;
  border-radius: 4px;
  word-break: break-word;
`

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  )
}

const Message = ({ message }) => {
  const scrollRef = useRef()
  useEffect(() => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }, [message])
  return (
    <Box ref={scrollRef} sx={{ px: 10, py: 2 }}>
      {message.sender_id === Auth.id ? (
        <Own>
          <TextMessage message={message} />
        </Own>
      ) : (
        <Wrapper>
          <TextMessage message={message} />
        </Wrapper>
      )}
    </Box>
  )
}

export default Message
