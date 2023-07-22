import React from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'
import AddFriend from './AddFriendIcon'

const Menu = ({
  setSelectedUser,
  myConversations,
  addFriendStateHandler,
  setConversationId,
}) => {
  return (
    <>
      <Header />
      <Search />
      <Conversations
        setConversationId={setConversationId}
        myConversations={myConversations}
        setSelectedUser={setSelectedUser}
      />
      <AddFriend onClickHandler={addFriendStateHandler} />
    </>
  )
}

export default Menu
