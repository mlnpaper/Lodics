import React from 'react'
import {
  AppLayout,
  SubMenu,
  EGovernment,
  KeyTechnology01,
  KeyTechnology02,
  KeyTechnology03,
  KeyTechnology04,
  KeyTechnology05,
} from '../../components'
import { PageContainer } from '../company'

export default function productsServices() {
  return (
    <AppLayout theme="black">
      <SubMenu title={'Products & Services'} />
      <PageContainer>
        {/* <EGovernment /> */}
        <KeyTechnology01 />
      </PageContainer>
    </AppLayout>
  )
}
