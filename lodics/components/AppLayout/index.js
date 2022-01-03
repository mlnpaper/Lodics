import React from 'react'
import { Header, Footer } from '..'
import { Div } from './styles'

const AppLayout = ({ children, theme }) => {
  console.log(theme)
  return (
    <Div $theme={theme}>
      <Header theme={theme} />
      {children}
      <Footer />
    </Div>
  )
}

export default AppLayout
