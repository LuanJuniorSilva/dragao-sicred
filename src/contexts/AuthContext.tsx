import React, 
  { 
    useState,
    useCallback,
    createContext,
    useContext,
    PropsWithChildren
  } from 'react'

type ILogin = {
  name: string
  email: string
  logged: boolean
}
type IUserContext = {
  login: ILogin
  updateAuth: (data: ILogin) => void
  reset: () => void
  getLogin: () => ILogin
}

const AuthContext = createContext<IUserContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context) throw new Error('useAuth precisa estar em AuthProvider')
  return context
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const auth = {
      name: '',
      email: '',
      logged: false
  }
  const [login, setLogin] = useState(auth)

  const updateAuth = useCallback(
    (data: ILogin) => {
      setLogin(data)
      localStorage.setItem('auth', JSON.stringify(data))
    },
    [setLogin]
  )
  const getLogin = (): ILogin => {
    const local = localStorage.getItem('auth')
    if(!local) return auth

    return JSON.parse(local)
  }
  

  const reset = useCallback(
    () => {
      setLogin(auth)
      localStorage.clear()
    },
    [setLogin]
  )

  return <AuthContext.Provider value={{  login, updateAuth, reset, getLogin }}>{children}</AuthContext.Provider>
}