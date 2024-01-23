import React from 'react'
import { Box } from '../../components'
import { useAuth } from '../../contexts/AuthContext'

export const Dashboard = () => {
  const { getLogin } = useAuth()
  
  return (
    <section>
      <Box>
        <h1 style={{textAlign: "center"}}>Seja bem vindo(a) {getLogin()?.name}</h1>
      </Box>
    </section>
  )
}