import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import TornadoIcon from '@mui/icons-material/Tornado'

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderBottom: '1px solid #f2f2f2',
  height: '53px',
  display: 'flex',
  alignItems: 'center',
  paddingRight: '10px',
}))

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#f0f2f5',
  display: 'flex',
  margin: '12px ',
  flexGrow: '1',
  borderRadius: '10px',
  alignItems: 'center',
}))

const Icon = styled(Box)(({ theme }) => ({
  padding: '0 12px',
  marginTop: '7px',
  color: '#919191',
}))

const TextField = styled(InputBase)(({ theme }) => ({
  color: '#3B444B',
  fontSize: '14px',
  paddingLeft: '8px',
}))

const Search = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Icon>
            <SearchIcon fontSize='small' />
          </Icon>
          <TextField placeholder='Search or start new chart' />
        </Wrapper>
        <TornadoIcon fontSize='small' sx={{ color: '#919191' }} />
      </Container>
    </>
  )
}

export default Search
