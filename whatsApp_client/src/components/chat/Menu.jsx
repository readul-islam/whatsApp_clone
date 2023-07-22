import React from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'
import AddFriend from './AddFriendIcon'

const Menu = ({ setSelectedUser, myConversation, addFriendStateHandler }) => {
  return (
    <>
      <Header />
      <Search />
      <Conversations
        myConversation={myConversation}
        setSelectedUser={setSelectedUser}
      />
      <AddFriend onClickHandler={addFriendStateHandler} />
    </>
  )
}

export default Menu
