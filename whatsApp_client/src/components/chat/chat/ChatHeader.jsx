import ChatIcon from '@mui/icons-material/Chat'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Typography, styled, Avatar, Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

const HeaderContainer = styled(Box)(({ theme }) => ({
  height: '44px',
  backgroundColor: '#ededed',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

// const Avatar = styled('img')(({ theme }) => ({
//   width: '40px',
//   height: '40px',
//   borderRadius: '50%',
//   marginTop: '5px',
// }))

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
}))

export const iconStyle = {
  fontSize: '26px',
  color: ' #696969',
}
const OnlineBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))
const OfflineBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'gray',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}))

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

const Name = styled(Typography)(({ theme }) => ({
  marginLeft: '12px',
}))
const Status = styled(Typography)(({ theme }) => ({
  marginLeft: '12px',
  fontSize: '13px',
  color: 'rgba(0,0,0,0.6)',
}))

const ChatHeader = () => {
  var status = navigator.onLine ? 'online' : 'offline'
  console.log(status)
  return (
    <>
      <HeaderContainer>
        <AvatarContainer>
          {status === 'online' ? (
            <>
              <OnlineBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar
                  alt='Remy Sharp'
                  src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg'
                />
              </OnlineBadge>
            </>
          ) : (
            <>
              <OfflineBadge
                overlap='circular'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
              >
                <Avatar
                  alt='Remy Sharp'
                  src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg'
                />
              </OfflineBadge>
            </>
          )}
          <Box>
            <Name>Name</Name>
            {status === 'online' ? (
              <Status>Online</Status>
            ) : (
              <Status>Offline</Status>
            )}
          </Box>
        </AvatarContainer>
        <IconBox>
          <SearchIcon sx={iconStyle} />

          <MoreVertIcon sx={iconStyle} />
        </IconBox>
      </HeaderContainer>
    </>
  )
}

export default ChatHeader
