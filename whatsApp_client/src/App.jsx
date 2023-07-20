import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider'
import { CookiesProvider, useCookies } from 'react-cookie'

function App() {
  return (
    <AccountProvider>
      <CookiesProvider>
        <Messenger />
      </CookiesProvider>
    </AccountProvider>
  )
}

export default App
