import { LoadingButton } from '@mui/lab'
import { Dialog, styled } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import WhatsAppIcon from '../assets/react.svg'
import FormInput from './FormInput'
import { object, string } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { updateUserInfo } from '../service/api'
import { useCookies } from 'react-cookie'
import { decryptedData } from '../utils/hooks'
import { status } from '../service/whatsApp'
import { toast } from 'react-hot-toast'
const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& 	.MuiDialog-paper': {
    height: '65%',
    width: '28%',
    maxHeight: '100%',
    maxWidth: '100%',
    //   margin: '20px',
    // overflow: 'hidden',
    borderRadius: 5,

    // [theme.breakpoints.down('md')]: {
    //   height: '90%',
    //   width: '100%',
    // },
    // [theme.breakpoints.down('lg')]: {
    //   height: '90%',
    //   width: '80%',
    // },
  },
}))
const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingBottom: '5px',
  marginTop: '15px',
  display: 'flex',
  borderRadius: '5px',
  border: '2px dashed #d6dcd7',
  justifyContent: 'center',
  position: 'relative',
  '&:hover': {
    '& > div': {
      display: 'flex',
    },
  },
}))
const Image = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
  margin: '25px 0px',
  borderRadius: '50%',
  boxShadow: '0px 0px 15px -10px #888888',
}))

const CustomCamera = styled(CameraAltIcon)(({ theme }) => ({
  width: '50px',
  height: '50px',
  color: '#A9A9A9',
}))
const CustomCameraBox = styled(Box)(({ theme }) => ({
  width: '150px',
  height: '150px',
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

const UpdateInfoDialog = ({
  setUpdateInfoDialogOpen,
  updateInfoDialogOpen,
}) => {
  const [image, setImage] = React.useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const user = decryptedData(cookies.user)
  // ? Default Values
  const defaultValues = {
    userName: '',
    about: '',
    image: '',
  }
  // ? Login Schema with Zod
  const updateSchema = object({
    userName: string()
      .min(5, 'username must be more than 5 characters')
      .max(20, 'username must be less than 20 characters'),

    about: string()
      .min(5, 'about must be more than 5 characters')
      .max(50, 'about must be less than 50 characters'),
    // password: string()
    //   .min(1, 'Password is required')
    //   .min(8, 'Password must be more than 8 characters')
    //   .max(32, 'Password must be less than 32 characters'),
    // persistUser: literal(true).optional(),
  })

  // ? The object returned from useForm Hook
  const methods = useForm({
    resolver: zodResolver(updateSchema),
    defaultValues,
  })

  const howPreview = (event) => {
    if (event.target.files.length > 0) {
      const img = event.target.files[0]
      let src = URL.createObjectURL(event.target.files[0])
      const preview = document.getElementById('image')
      preview.src = src
      setImage(img)

      //   call there your image update api
    }
  }

  // ? Submit Handler
  const onSubmitHandler = async (values) => {
    const formData = new FormData()
    if (image) {
      formData.append('file', image)
      formData.append('userName', values.userName)
      formData.append('About', values.about)
      formData.append('id', user.id)

      const updated = await updateUserInfo(formData)
      console.log(updated)
      if (updated.status === status.SUCCESS) {
        toast.success(updated.message ,{id:1})
        setUpdateInfoDialogOpen(false)
      }
    } else {
      console.log('123')
    }
  }
  return (
    <CustomDialog open={updateInfoDialogOpen}>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingX: '20px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar
            sx={{ margin: 1, width: 50, height: 50 }}
            src={WhatsAppIcon}
          />
        </Box>
        <Typography sx={{ fontSize: 22, fontWeight: 600, color: '#758a7a' }}>
          Welcome
        </Typography>
        <Typography sx={{ color: '#91a195' }}>
          Please Enter your information
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
              id='Username'
              label='username'
              name='userName'
              autoComplete={false}
              autoFocus
            />

            <FormInput
              margin='normal'
              required
              fullWidth
              name='about'
              label='about'
              type='text'
              id='about'
              autoComplete={false}
            />

            <ImageContainer>
              <CustomLabel>
                <CustomInput
                  onChange={(e) => howPreview(e)}
                  accept='image/*'
                  sx={{ display: 'none' }}
                  type='file'
                />
              </CustomLabel>
              <Image
                id='image'
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              />
              <CustomCameraBox>
                <CustomCamera />
              </CustomCameraBox>
              <Typography
                sx={{
                  color: '#d6dcd7',
                  position: 'absolute',
                  bottom: 4,
                  fontSize: 12,
                  fontStyle: 'italic',
                }}
              >
                PNG,JPG,SVG
              </Typography>
            </ImageContainer>

            <LoadingButton
              loading={false}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
    </CustomDialog>
  )
}

export default UpdateInfoDialog
