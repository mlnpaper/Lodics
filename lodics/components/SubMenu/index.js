import React, { useContext, useCallback, useEffect, useState } from 'react'
import { Container, SubContainer } from './styles'
import { Select, Button } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { HomeOutlined } from '@ant-design/icons'
import Router from 'next/router'
import GlobalStateContext from '../../context/globalStateContext'

const { Option } = Select

const mainSelect = [
  { value: 'company', text: 'Comapany' },
  { value: 'business', text: 'Business' },
  { value: 'productsServices', text: 'Products & Services' },
  { value: 'recruitment', text: 'Recruitment' },
]

export default function SubMenu({ title, subSelectList = [] }) {
  const [newSubSelectList, setNewSubSelectList] = useState(subSelectList)
  const [currentSelect, setCurrentSelect] = useState('')

  const { setSubSelectedComponent } = useContext(GlobalStateContext)

  const onClickGoHome = useCallback(() => {
    Router.push('/')
  })

  const onChangeSelect = useCallback(value => {
    console.log(value)
    console.log(setSubSelectedComponent)
    setCurrentSelect(value)
    if (
      value === 'company' ||
      value === 'business' ||
      value === 'productsServices' ||
      value === 'recruitment'
    ) {
      Router.push(`/${value}`)
    } else {
      setSubSelectedComponent(value)
    }
  }, [])

  const createSelect = (defaultValue, selectList, width = 250) => {
    return (
      <Select
        defaultValue={defaultValue}
        style={{ width: width }}
        onChange={onChangeSelect}
      >
        {selectList.map(({ value, text }) => (
          <Option key={value} value={value}>
            {text}
          </Option>
        ))}
      </Select>
    )
  }

  useEffect(() => {
    if (currentSelect === 'keyTechnology') {
      setNewSubSelectList(subSelectList)
    } else if (currentSelect === 'eGoverment') {
      setNewSubSelectList([subSelectList[0]])
    }
  }, [currentSelect])

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

        {createSelect(title, mainSelect)}
        {!!newSubSelectList.length &&
          newSubSelectList.map(subSelect =>
            createSelect(
              subSelect[0]['text'],
              subSelect,
              subSelect[0]['value'] === 'keyTechnology01' ? 400 : 200
            )
          )}
      </SubContainer>
    </>
  )
}
