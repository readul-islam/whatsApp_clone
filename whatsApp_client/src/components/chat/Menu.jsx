import React from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'

const Menu = ({ setSelectedUser }) => {
  return (
    <>
      <Header />
      <Search />
      <Conversations setSelectedUser={setSelectedUser} />
    </>
  )
}

export default Menu
