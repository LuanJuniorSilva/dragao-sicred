import React, { useEffect } from 'react'
import { SignIn } from '../../containers'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export const SignInPage = () => {
  const { getLogin } = useAuth()
  const navigate = useNavigate()
  const authed = getLogin().logged
  
  useEffect(() => {
    if(authed) navigate('/dashboard')
  }, [authed, navigate])
  return (
    <SignIn />
  )
}
