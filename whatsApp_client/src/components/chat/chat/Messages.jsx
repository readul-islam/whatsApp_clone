import { Box, Typography, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import BackgroundImage from '../../../assets/background_image.png'
import { getMessages, sendNewMessage } from '../../../service/api'
import { Auth } from '../../Messenger'
import ChatFooter from './ChatFooter'
import { isEmpty } from 'lodash'
import Message from './Message'
import { AccountContext } from '../../../context/AccountProvider'

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: '50%',
}))

const Component = styled(Box)(({ theme }) => ({
  height: '82vh',
  overflowY: 'scroll',
}))

const Messages = ({ selectedUser, conversationId }) => {
  const [messageValue, setMessageValue] = useState('')
  const [messages, setMessages] = useState([])
  const [reload, setReload] = useState(false)
  const [inComingMessage, setIncComingMessage] = useState(null)
  const { socket, selectedConversation } = useContext(AccountContext)

  const sendMessage = async (e) => {
    const code = e.which || e.keyCode

    //  if keyPress enter, send message
    if (code === 13) {
      //payload
      const payload = {
        text: messageValue,
        sender_id: Auth.id,
        receiver_id: selectedUser.id,
        conversation_id: conversationId,
      }

      socket.current.emit('sendMessage', payload)

      const sendedMessage = await sendNewMessage(payload)
      setReload(!reload)

      setMessageValue('')
    }
  }

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await getMessages(conversationId)
      setMessages(res.data)
    }
    fetchMessages()
  }, [conversationId, reload, selectedUser.id, Auth.id])

  useEffect(() => {
    socket.current.on('getMessage', (data) => {
      console.log(data, '44444')
      setIncComingMessage({
        ...data,
        createdAt: Date.now(),
      })
    })
  }, [])

  useEffect(() => {
    if (inComingMessage) {
      if (
        inComingMessage.sender_id === selectedConversation.creator.id ||
        inComingMessage.sender_id === selectedConversation.participant.id
      ) {
        console.log('hi')
        setMessages((prev) => [...prev, inComingMessage])
      }
    }
  }, [inComingMessage, selectedConversation])

  return (
    <Wrapper>
      <Component>
        {!isEmpty(messages) &&
          messages.map((message) => (
            <>
              <Message message={message} />
            </>
          ))}
      </Component>

      <ChatFooter
        sendMessage={sendMessage}
        setMessageValue={setMessageValue}
        messageValue={messageValue}
      />
    </Wrapper>
  )
}

export default Messages
