import { Box, styled } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff'
import React, { useState } from 'react'
import HeaderOptionMenu from './HeaderOptionMenu'
import InfoDrawer from '../../drawer/InfoDrawer'

const HeaderContainer = styled(Box)(({ theme }) => ({
  height: '44px',
  backgroundColor: '#ededed',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const Avatar = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
}))

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
}))

export const iconStyle = {
  fontSize: '26px',
  color: ' #696969',
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleHandler = () => {
    setOpen(true)
  }
  return (
    <>
      <HeaderContainer>
        <Avatar
          onClick={toggleHandler}
          src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg'
          alt='profile image'
        />

        <IconBox>
          <HistoryToggleOffIcon sx={iconStyle} />
          <ChatIcon sx={iconStyle} />
          <HeaderOptionMenu setOpen={setOpen} />
        </IconBox>
        <InfoDrawer open={open} setOpen={setOpen} />
      </HeaderContainer>
    </>
  )
}

export default Header
