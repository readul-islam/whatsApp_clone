import { styled, Box } from '@mui/material'
import React from 'react'
import BackgroundImage from '../../../assets/background_image.png'
import ChatFooter from './ChatFooter'

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: '50%',
}))

const Component = styled(Box)(({ theme }) => ({
  height: '82vh',
  overflowY: 'scroll',
}))

const Messages = () => {
  return (
    <Wrapper>
      <Component></Component>

      <ChatFooter />
    </Wrapper>
  )
}

export default Messages
