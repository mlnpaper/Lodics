import React from 'react'
import { Container, SubContainer } from './styles'
import { Select, Button } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { HomeOutlined } from '@ant-design/icons'
import Link from 'next/link'

const { Option } = Select

const mainSelect = [
  { value: 'company', text: 'Comapany' },
  { value: 'business', text: 'Business' },
  { value: 'productsServices', text: 'Products & Services' },
  { value: 'recruitment', text: 'Recruitment' },
]

export default function SubMenu({ title }) {
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
        <Link href="/">
          <a>
            <Button type="primary" icon={<HomeOutlined />} size={'large'} />
          </a>
        </Link>
        {creteSelect(title, mainSelect)}
      </SubContainer>
    </>
  )
}
