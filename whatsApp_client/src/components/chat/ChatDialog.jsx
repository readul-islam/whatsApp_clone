import { Box, Dialog, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { getMyConversation } from '../../service/api'
import { decryptedData } from '../../utils/hooks'
import AddFriendDialog from './AddFriendDialog'
import Menu from './Menu'
import ChatBox from './chat/ChatBox'
import EmptyChat from './chat/EmptyChat'
import { status } from '../../service/whatsApp'

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& 	.MuiDialog-paper': {
    height: '95%',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: '20px',
    overflow: 'hidden',
    borderRadius: 0,
  },
}))

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}))

const MenuContainer = styled(Box)(({ theme }) => ({
  minWidth: '450px',
  height: '100%',
  position: 'relative',
}))

const ChatContainer = styled(Box)(({ theme }) => ({
  width: '75%',
  minWidth: '300px',
  hight: '100%',
  borderLeft: '1px solid rgba(0,0,0,0.14) ',
}))

const ChatDialog = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [myConversations, setMyConversations] = useState([])
  const [addFriend, setAddFriend] = useState(false)
  const [reload, setReload] = useState(false)
  const [conversationId, setConversationId] = useState('')

  useEffect(() => {
    const user = decryptedData(cookies.user)

    const fetchData = async () => {
      const conversation = await getMyConversation(user.id)

      if (conversation.status === status.SUCCESS) {
        setMyConversations(conversation.data)
      }
    }
    fetchData()
  }, [reload])

  const addFriendStateHandler = () => {
    setAddFriend(true)
  }
  //

  return (
    <CustomDialog maxWidth={'md'} hideBackdrop open={true}>
      <Container>
        <MenuContainer>
          <Menu
            setConversationId={setConversationId}
            addFriendStateHandler={addFriendStateHandler}
            myConversations={myConversations}
            setSelectedUser={setSelectedUser}
          />
        </MenuContainer>
        <ChatContainer>
          {selectedUser ? (
            <ChatBox
              myConversations={myConversations}
              conversationId={conversationId}
              selectedUser={selectedUser}
            />
          ) : (
            <EmptyChat />
          )}
        </ChatContainer>
        {addFriend && (
          <AddFriendDialog
            reload={reload}
            setReload={setReload}
            setAddFriend={setAddFriend}
            addFriend={addFriend}
          />
        )}
      </Container>
    </CustomDialog>
  )
}

export default ChatDialog
