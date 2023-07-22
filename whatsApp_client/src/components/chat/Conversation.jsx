import { Box, Typography, styled } from '@mui/material'
import React from 'react'

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
  console.log(user?.image)
  return (
    <Container>
      <Box>
        <Image
          // crossorigin='anonymous'
          src={
            user.image
              ? `http://localhost:8080/${user.image}`
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          }
          alt=''
        />
      </Box>
      <Box>
        <Box>
          <Typography>{user.userName ? user.userName : 'unknown'}</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Conversation
