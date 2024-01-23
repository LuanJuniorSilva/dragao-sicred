import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { Header, Sidenav } from '../components'
import { useAuth } from '../contexts/AuthContext'

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { getLogin } = useAuth()
  const authed = getLogin().logged

  return authed ? (
    <div className="container">
      <Sidenav />
      <main>
        <Header />  
        {children}
      </main>   
      </div>
      ) : <Navigate to="/login" />
}