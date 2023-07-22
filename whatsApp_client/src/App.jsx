import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider'
import { CookiesProvider, useCookies } from 'react-cookie'
import toast, { Toaster } from 'react-hot-toast'
import ToasterContainer from './utils/ToasterContainer'

function App() {
  return (
    <>
      <AccountProvider>
        <CookiesProvider>
          <div>
            <Messenger />
            <ToasterContainer />
          </div>
        </CookiesProvider>
      </AccountProvider>
    </>
  )
}

export default App
