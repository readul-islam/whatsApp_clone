import { Box, Drawer, Typography, styled } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Profile from './Profile'

// const CustomDrawer = styled(Drawer)(({theme})=>({
//     boxShadow:'none',
// }))

const drawerStyle = {
  left: 20,
  top: 20,
  height: '95.5%',
  width: '24.5%',
  boxShadow: 0,
  zIndex: 200,
}

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: '#008069',
  height: '107px',
  color: '#FFFFFF',
  display: 'flex',
  '& > svg, & > p': {
    marginTop: 'auto',
    padding: '15px',
    fontWeight: 600,
  },
}))

const Component =styled(Box)(({ theme }) => ({
  backgroundColor: '#ededed',
  height: '85%',
}))

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Drawer
      // hideBackdrop={true}
      PaperProps={{ sx: drawerStyle }}
      open={open}
      onClose={handleClose}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBackIcon onClick={() => setOpen(false)} />
        <Typography>Profile</Typography>
      </Header>

      <Component>
        <Profile />
      </Component>
    </Drawer>
  )
}

export default InfoDrawer
