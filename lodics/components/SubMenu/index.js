import React, { useCallback } from 'react'
import { Container, SubContainer } from './styles'
import { Select, Button } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { HomeOutlined } from '@ant-design/icons'
import Router from 'next/router'

const { Option } = Select

const mainSelect = [
  { value: 'company', text: 'Comapany' },
  { value: 'business', text: 'Business' },
  { value: 'productsServices', text: 'Products & Services' },
  { value: 'recruitment', text: 'Recruitment' },
]

export default function SubMenu({ title }) {
  const onClickGoHome = useCallback(() => {
    Router.push('/')
  })

  const creteSelect = (defaultValue, selectList) => {
    return (
      <Select defaultValue={defaultValue}>
        {selectList.map(({ value, text }) => (
          <Option key={value} value={value}>
            {text}
          </Option>
        ))}
      </Select>
    )
  }

  return (
    <>
      <Container>
        <h1>{title}</h1>
      </Container>
      <SubContainer>
        <Button
          onClick={onClickGoHome}
          type="primary"
          icon={<HomeOutlined />}
          size={'large'}
        />

        {creteSelect(title, mainSelect)}
      </SubContainer>
    </>
  )
}
