import React from 'react'
import { Header } from '..'
import { Div, Body } from './styles'

const AppLayout = ({ children }) => {
  return (
    <Div>
      <Header />
      <Body>{children}</Body>
    </Div>
  )
}

export default AppLayout
