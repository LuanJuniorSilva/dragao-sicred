import { ComponentProps } from 'react'
import { ButtonStyled } from './styles'

export const Button = ({children, ...props}: ComponentProps<'button'>) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}
