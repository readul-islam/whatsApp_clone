import { Dialog, styled } from '@mui/material'
import React from 'react'

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& 	.MuiDialog-paper': {
    height: '95%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: '20px',
    overflow: 'hidden',
    borderRadius: 0,

    [theme.breakpoints.down('md')]: {
      height: '90%',
      width: '100%',
    },
    [theme.breakpoints.down('lg')]: {
      height: '90%',
      width: '80%',
    },
  },
}))

const ChatDialog = () => {
  return (
    <CustomDialog hideBackdrop open={true}>
      as
    </CustomDialog>
  )
}

export default ChatDialog
