import React from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'

const Menu = ({ setSelectedUser ,users}) => {
  return (
    <>
      <Header />
      <Search />
      <Conversations users={users} setSelectedUser={setSelectedUser} />
    </>
  )
}

export default Menu
