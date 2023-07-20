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
  return (
    <Container>
      <Box>
        <Image src={user.image} alt='' />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Conversation
