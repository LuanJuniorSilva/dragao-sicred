import React, { PropsWithChildren } from 'react'
import { Content } from './styles'

export const Box = ({children}: PropsWithChildren) => {
  return (
    <Content>{children}</Content>
  )
}
