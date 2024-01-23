import React, 
  { 
    useState,
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    PropsWithChildren
  } from 'react'
import { IDragon } from '../types/IDragon'

type IDragonContext = {
  dragonData: IDragon[]
  setDragonData: Dispatch<SetStateAction<IDragon[]>>
}

const DragonContext = createContext<IDragonContext | null>(null)

export const useDragon = () => {
  const context = useContext(DragonContext)
  if(!context) throw new Error('useDragon precisa estar em DragonProvider')
  return context
}

export const DragonProvider = ({ children }: PropsWithChildren) => {
  const [dragonData, setDragonData] = useState<IDragon[]>([])

  return <DragonContext.Provider value={{ dragonData, setDragonData }}>{children}</DragonContext.Provider>
}