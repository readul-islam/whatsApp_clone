import React from 'react'
import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material'
import { Box, styled, InputBase } from '@mui/material'

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`

const ClipIcon = styled(AttachFile)`
  transform: 'rotate(40deg)';
`

const ChatFooter = ({sendMessage, setMessageValue, messageValue }) => {
  return (
    <Container>
      <EmojiEmotions />
      <label htmlFor='fileInput'>
        <ClipIcon sx={{ rotate: '45deg', marginTop: 1 }} />
      </label>
      <input
        type='file'
        id='fileInput'
        style={{ display: 'none' }}
        // onChange={(e) => onFileChange(e)}
      />

      <Search>
        <InputField
          placeholder='Type a message'
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setMessageValue(e.target.value)}
          // onKeyPress={(e) => sendMessage(e)}
          onKeyDown={(e) =>sendMessage(e)}
          value={messageValue}
        />
      </Search>
      <Mic />
    </Container>
  )
}

export default ChatFooter
