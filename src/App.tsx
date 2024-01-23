import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import { LoadingProvider } from './contexts/LoadingContext'
import { DragonProvider } from './contexts/DragonContext'
import { AuthProvider } from './contexts/AuthContext'
import Router from './routes'
import { ToastContainer } from 'react-toastify'

function App() {
  
  return (
    <BrowserRouter>
        <AuthProvider>
          <DragonProvider>
            <LoadingProvider>
              <GlobalStyle />
                  <Router /> 
                  <ToastContainer autoClose={3000} />
          </LoadingProvider>
        </DragonProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
