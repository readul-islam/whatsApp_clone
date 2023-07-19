import React, { useState } from 'react'
import { iconStyle } from './Header'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Menu, MenuItem, styled } from '@mui/material'

const MenuOption = styled(MenuItem)(({ theme }) => ({
  fontSize: '14px',
  padding: '15px 60px 5px 24px',
  color: '#4A4A4A',
}))

const HeaderOptionMenu = ({ setOpen }) => {
  const [openOptionMenu, setOpenOptionMenu] = useState(null)

  const ClickHandler = (e) => {
    setOpenOptionMenu(e.currentTarget)
  }

  const handleClose = () => {
    setOpenOptionMenu(null)
  }

  return (
    <>
      <MoreVertIcon onClick={ClickHandler} sx={iconStyle} />
      <Menu
        anchorEl={openOptionMenu}
        open={openOptionMenu}
        onClose={handleClose}
        keepMounted
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose()
            setOpen(true)
          }}
        >
          Profile
        </MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  )
}

export default HeaderOptionMenu
