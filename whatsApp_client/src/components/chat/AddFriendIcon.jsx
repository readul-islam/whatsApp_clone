import AddIcon from '@mui/icons-material/Add'
import { Box, Dialog, Fab, styled } from '@mui/material'
import React from 'react'

const FabContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 10,
  bottom: '12%',
}))
const CustomFab = styled(Fab)(({ theme }) => ({
  background: '#00b392',
  color: '#FFFFFF',
  width: '50px',
  height: '50px',
  boxShadow: 'none',
  '&:hover': {
    background: '#008069',
  },
}))

const AddFriend = ({ onClickHandler }) => {
  return (
    <>
      <FabContainer>
        <CustomFab onClick={onClickHandler}>
          <AddIcon />
        </CustomFab>
      </FabContainer>
    </>
  )
}

export default AddFriend
