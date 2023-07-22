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

const Conversation = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  console.log(user, 'user')
  let auth = decryptedData(cookies.user)

  return (
    <Container>
      {user.creator.id === auth.id ? (
        <>
          <Image
            crossorigin='anonymous'
            src={
              user.participant.image
                ? `http://localhost:8080/${user.participant.image}`
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt=''
          />

          <Box>
            <Typography>
              {user.participant.userName
                ? user.participant.userName
                : 'unknown'}
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Image
            crossorigin='anonymous'
            src={
              user.participant.image
                ? `http://localhost:8080/${user.creator.image}`
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt=''
          />
          <Box>
            <Typography>
              {user.creator.userName ? user.creator.userName : 'unknown'}
            </Typography>
          </Box>
        </>
      )}
    </Container>
  )
}

export default Conversation
