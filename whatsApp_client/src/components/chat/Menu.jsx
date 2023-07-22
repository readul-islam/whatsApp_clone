import React from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'
import AddFriend from './AddFriendIcon'

const Menu = ({ setSelectedUser, users, addFriendStateHandler }) => {
  return (
    <>
      <Header />
      <Search />
      <Conversations users={users} setSelectedUser={setSelectedUser} />
      <AddFriend onClickHandler={addFriendStateHandler} />
    </>
  )
}

export default Menu
