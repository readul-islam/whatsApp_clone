import {
  Box,
  Dialog,
  Divider,
  List,
  ListItem,
  Typography,
  styled,
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc'
// image
import QRCode from '../../assets/qrcode.jpg'
import { AccountContext } from '../../context/AccountProvider'
import auth from '../../firebase'
import AuthForm from '../auth/AuthForm'

const dialogStyle = {
  height: '96%',
  width: '60%',
  maxHeight: '100%',
  maxWidth: '100%',
  marginTop: '15%',
  overflow: 'hidden',
}

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& 	.MuiDialog-paper': {
    height: '96%',
    width: '60%',
    maxHeight: '100%',
    maxWidth: '100%',
    marginTop: '15%',
    overflow: 'hidden',

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

const Container = styled(Box)(({ theme }) => ({
  padding: ' 40px 40px 0 55px',

  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
}))

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: 10,
  },

  [theme.breakpoints.down('lg')]: {
    '.qr_container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
}))

// const Title = styled(Typography)`
//   font-size: 22px;
//   font-weight: 400;
//   font-family: inherit;
//   color: #41525d;
//   margin-bottom: 20px;
// `;

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 400,
  fontFamily: 'inherit',
  color: '#41525d',
  marginBottom: '20px',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    marginBottom: '10px',
    paddingTop: '20px',
  },
}))

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
    line-height: 24px;
    color: #5c6971;
  }
`

const QrStyle = styled('img')(({ theme }) => ({
  // ✅ typed-safe
  maxWidth: '230px',
  maxHeight: '230px',

  [theme.breakpoints.down('md')]: {
    maxWidth: '180px',
    maxHeight: '180px',
  },
}))

const LinkedText = styled(Typography)`
  color: #008069;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  margin-top: 20px;
`
const CustomGoogleButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100px',
  left: '30px',

  [theme.breakpoints.down('md')]: {
    top: '70px',
    left: '11px',
    '& > p': {
      fontSize: '8px',
    },
  },
  display: 'flex',

  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  padding: '5px 5px',
  cursor: 'pointer',
  borderRadius: '5px',
  justifyContent: 'center',
  gap: '10px',
  '& > p': {
    fontSize: '13px',
  },
}))

const LoginDialog = ({ setUpdateInfoDialogOpen }) => {
  const { userInfo, setUserInfo } = useContext(AccountContext)
  const [signUp, setSignUP] = useState(false)

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  // console.log(error, userInfo)
  // if (user & !error) {
  //   setUserInfo()
  // }

  return (
    <CustomDialog
      hideBackdrop={true}
      PaperProps={{ sx: dialogStyle }}
      open={true}
    >
      {signUp ? (
        <>
          <AuthForm
            setUpdateInfoDialogOpen={setUpdateInfoDialogOpen}
            signUp={signUp}
            setSignUP={setSignUP}
          />
        </>
      ) : (
        <>
          <Container>
            <HeaderContainer>
              <Box>
                <Title> Use WhatsApp on your computer</Title>
                <StyledList>
                  <ListItem>1. Open WhatsApp on your phone</ListItem>
                  <ListItem>
                    2. Tap Menu : or Setting 🔯 and select Linked Device
                  </ListItem>
                  <ListItem>3. Link a device</ListItem>
                  <ListItem>
                    4. Point your phone to this screen to capture the QR code
                  </ListItem>
                </StyledList>
              </Box>
              <Box className='qr_container'>
                <Box sx={{ position: 'relative' }}>
                  <QrStyle src={QRCode} alt='' />

                  <CustomGoogleButton onClick={() => signInWithGoogle()}>
                    <FcGoogle size={25} />
                    <Typography>SignIn With Google</Typography>
                  </CustomGoogleButton>
                </Box>
              </Box>
            </HeaderContainer>

            <Divider sx={{ marginTop: 3 }} light />
            <LinkedText>
              New to WhatsApp?{' '}
              <Box
                onClick={() => setSignUP(true)}
                style={{
                  color: '#006400',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                component={'span'}
              >
                Sign Up
              </Box>{' '}
            </LinkedText>
          </Container>
        </>
      )}
    </CustomDialog>
  )
}

export default LoginDialog
