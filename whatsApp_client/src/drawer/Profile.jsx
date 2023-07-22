import { Box, Typography, styled } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import React from 'react'

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  '&:hover': {
    '& > div': {
      display: 'flex',
    },
  },
}))
const Image = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  margin: '25px 0px',
  borderRadius: '50%',
  boxShadow: '0px 0px 15px -10px #888888',
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

const CustomCamera = styled(CameraAltIcon)(({ theme }) => ({
  width: '50px',
  height: '50px',
  color: '#A9A9A9',
}))
const CustomCameraBox = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '200px',
  margin: '25px 0px',
  borderRadius: '50%',
  position: 'absolute',
  background: '#D3D3D3',
  opacity: 0.8,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'none',
  transition: '5s ease',
}))

const CustomLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  margin: '25px 0px',
  // backgroundColor: 'red',
  zIndex: 1500,
}))
const CustomInput = styled('input')(({ theme }) => ({
  paddingTop: '80px',
  paddingLeft: '10px',
  display: 'none',
}))

const Profile = () => {
  const howPreview = (event) => {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0])
      var preview = document.getElementById('file-ip-1-preview')
      preview.src = src
      //   call there your image update api
    }
  }
  return (
    <>
      <ImageContainer>
        <CustomLabel>
          <CustomInput onChange={(event) => howPreview(event)} type='file' />
        </CustomLabel>
        <Image
          id='file-ip-1-preview'
          src={
            'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg'
          }
          alt='profile image'
        />
        <CustomCameraBox>
          <CustomCamera />
        </CustomCameraBox>
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
