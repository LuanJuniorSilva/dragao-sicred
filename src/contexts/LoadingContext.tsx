import React, 
  { 
    useState,
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    PropsWithChildren
  } from 'react'

type ILoadingContext = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<ILoadingContext | null>(null)

export const useLoader = () => {
  const context = useContext(LoadingContext)
  if(!context) throw new Error('useLoader precisa estar em LoadingProvider')
  return context
}

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false)

  return <LoadingContext.Provider value={{  loading, setLoading }}>{children}</LoadingContext.Provider>
}