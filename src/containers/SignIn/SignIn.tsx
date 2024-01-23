import { useState } from 'react'
import { Wrapper, Content } from './styles'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const { updateAuth } = useAuth()
const navigate = useNavigate()

const handleLogin = () => {
  if (!email || !pass) return

  if(email === 'admin@gmail.com') {
    if (pass === '123456') {
      toast.success('Seja bem vindo(a)')
      updateAuth({email, name: 'Administrador', logged: true})
      navigate('/dashboard')
    } else {
      toast.error('Senha invalida')
    }
  } else {
    toast.error('Este e-mail não existe')
  }
}

  return (
    <Wrapper>
      <Content>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="Seu e-mail"
          required
        />
        <input 
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          name="password"
          placeholder="Sua senha"
          required
        />

        <button onClick={() => handleLogin()}>Acessar</button>
      </form>
      </Content>
      </Wrapper>
  )
}
