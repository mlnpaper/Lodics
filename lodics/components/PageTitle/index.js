import React from 'react'
import { Title } from './styles'

export default function PageTitle({ title }) {
  return (
    <Title>
      <div>{title}</div>
      <hr />
    </Title>
  )
}
