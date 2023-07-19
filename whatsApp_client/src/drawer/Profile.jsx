import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}))
const Image = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  padding: '25px 0px',
  borderRadius: '50%',
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  padding: '12px 30px 5px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  '& :first-child': {
    fontSize: '13px',
    color: '#009688',
    fontWeight: 200,
  },
  '& :last-child': {
    margin: '14px 0',
    color: '#4A4A4A',
  },
}))

const DescriptionWrapper = styled(Box)(({ theme }) => ({
  padding: '15px 20px 28px 30px',
  '& > p': {
    fontSize: '13px',
    color: '#8696a0',
  },
}))

const Profile = () => {
  return (
    <>
      <ImageContainer>
        <Image
          src={
            'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg'
          }
          alt='profile image'
        />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>developer.readul@gmail.com</Typography>
      </BoxWrapper>
      <DescriptionWrapper>
        <Typography>
          This is not your username or pin. This name will be visible to your
          whatsApp contacts
        </Typography>
      </DescriptionWrapper>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Software Engineer</Typography>
      </BoxWrapper>
    </>
  )
}

export default Profile
