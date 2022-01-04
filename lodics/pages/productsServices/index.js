import React from 'react'
import { AppLayout, SubMenu, EGovernment } from '../../components'
import { PageContainer } from '../company'

export default function productsServices() {
  return (
    <AppLayout theme="black">
      <SubMenu title={'Products & Services'} />
      <PageContainer>
        <EGovernment />
      </PageContainer>
    </AppLayout>
  )
}
