import React from 'react'
import { AppLayout } from '../../components'
import styled from 'styled-components'
import { palette } from '../../styles/color'

export const PageContainer = styled.section`
  width: 1200px;
  margin: 8rem auto;
  color: ${palette.themeBlack};
`

export default function company() {
  return (
    <AppLayout theme="black">
      <PageContainer>company</PageContainer>
    </AppLayout>
  )
}
