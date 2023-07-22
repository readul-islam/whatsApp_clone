import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useCookies } from 'react-cookie'
import { decryptedData } from '../../utils/hooks'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '45px',
  padding: '13px',
  cursor: 'pointer',
}))

const Image = styled('img')(({ theme }) => ({
  width: '50px',
  height: '50px',
  padding: '0 14px',
  borderRadius: '50%',
}))

const Conversation = ({ conversation, setSelectedUser }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  console.log(conversation, 'user')
  let auth = decryptedData(cookies.user);
  console.log(auth,'4444444444')

  return (
    <>
      {conversation.creator.id === auth.id ? (
        <Container onClick={() => setSelectedUser(conversation.participant)}>
          <Image
            crossorigin='anonymous'
            src={
              conversation.participant.image
                ? `http://localhost:8080/${conversation.participant.image}`
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt=''
          />

          <Box>
            <Typography>
              {conversation.participant.userName
                ? conversation.participant.userName
                : 'unknown'}
            </Typography>
          </Box>
        </Container>
      ) : (
        <Container onClick={() => setSelectedUser(conversation.creator)}>
          <Image
            crossorigin='anonymous'
            src={
              conversation.creator.image
                ? `http://localhost:8080/${conversation.creator.image}`
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt=''
          />
          <Box>
            <Typography>
              {conversation.creator.userName
                ? conversation.creator.userName
                : 'unknown'}
            </Typography>
          </Box>
        </Container>
      )}
    </>
  )
}

export default Conversation
