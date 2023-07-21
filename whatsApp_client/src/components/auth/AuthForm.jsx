import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LoadingButton } from '@mui/lab'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import WhatsAppIcon from '../../assets/react.svg'
import { styled } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { literal, object, string } from 'zod'
import FormInput from '../FormInput'
import { userLogin, userRegister } from '../../service/api'
import { toast } from 'react-hot-toast'
import { status } from '../../service/whatsApp'
import { showToastByStatus } from '../../utils/hooks'

// import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

const AuthForm = ({ setSignUP, signUp }) => {
  const [singIn, setSignIn] = React.useState(false)

  // ? Default Values
  const defaultValues = {
    email: '',
    password: '',
  }
  // ? Login Schema with Zod
  const loginSchema = object({
    email: string().min(1, 'Email is required').email('Email is invalid'),
    password: string()
      .min(1, 'Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    // persistUser: literal(true).optional(),
  })

  // ? The object returned from useForm Hook
  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  // ? Submit Handler
  const onSubmitHandler = async (values) => {
    if (singIn) {
      //  sign in logic
      const res = await userLogin(values)
      showToastByStatus(res);
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    } else {
      // register logic
      const res = await userRegister(values)
      console.log(res)
      showToastByStatus(res)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar sx={{ margin: 1, width: 50, height: 50 }} src={WhatsAppIcon}>
            {/*  */}
          </Avatar>

          {/* lock icon */}
          {/* <Avatar
            sx={{
              position: 'absolute',
              top: 0,
              width: 50,
              height: 50,
              opacity: 0.4,
              marginTop: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar> */}
        </Box>
        <Typography component='h1' variant='h5'>
          {!singIn ? 'Sign Up' : 'Sign In'}
        </Typography>
        <FormProvider {...methods}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={methods.handleSubmit(onSubmitHandler)}
            sx={{ mt: 1 }}
          >
            <FormInput
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />

            <FormInput
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            {singIn ? (
              <LoadingButton
                loading={false}
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </LoadingButton>
            ) : (
              <LoadingButton
                loading={false}
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </LoadingButton>
            )}

            <Grid container>
              {singIn && (
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
              )}
              <Grid item>
                <Link href='#' variant='body2'>
                  {singIn
                    ? "Don't have an account? "
                    : 'Already have an account? '}

                  {singIn ? (
                    <Box
                      onClick={() => {
                        setSignIn(false)
                      }}
                      component={'span'}
                    >
                      Sign Up
                    </Box>
                  ) : (
                    <Box
                      onClick={() => {
                        setSignIn(true)
                      }}
                      component={'span'}
                    >
                      Sign In
                    </Box>
                  )}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  )
}

export default AuthForm
