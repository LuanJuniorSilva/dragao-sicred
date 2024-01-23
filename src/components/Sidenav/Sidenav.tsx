import React from 'react'
import resumo from '../../assets/icons/resumo.svg'
import home from '../../assets/icons/home.svg'
import configuracoes from '../../assets/icons/configuracoes.svg'
import sair from '../../assets/icons/sair.svg'
import DragonSVG from '../../assets/DragonSVG'
import { NavLink, useNavigate } from 'react-router-dom'
import { SidenavStyled } from './styles'
import { useAuth } from '../../contexts/AuthContext'

export const Sidenav = () => {
  const navigate = useNavigate()
  const { reset } = useAuth()
  const logout = () => {
    reset()
    navigate('/login')
  }

  return (
    <SidenavStyled>
      <DragonSVG title="Dragões Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/dashboard">Inicial</NavLink>
        </li>
        <li>
          <span>
            <img src={home} alt="" />
          </span>
          <NavLink to="/dragons">Lista de Dragões</NavLink>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <NavLink to="/config">Configurações</NavLink>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="" onClick={() => logout()}>Sair</a>
        </li>
      </ul>
    </SidenavStyled>
  )
}