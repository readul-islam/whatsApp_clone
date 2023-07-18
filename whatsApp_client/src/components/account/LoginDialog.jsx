import { Dialog } from '@mui/material';
import React from 'react'


const dialogStyle = {
height:'96%',
width:'60%',
maxHeight:'100%',
maxWidth:'100%',
marginTop:'15%',
overflow:'hidden',


};

const LoginDialog = () => {
  return (
    <Dialog 
    hideBackdrop={true}
    PaperProps={{sx:dialogStyle}} open={true}>

    </Dialog>
  )
}

export default LoginDialog;