import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

const AppLayout = ({ children }) => {
  const handleChange = e => {
    console.log(e.target.value)
  }
  return (
    <>
      <Header>
        <img
          src="img/LoDiCS logo_W.png"
          style={{ width: '200px', height: '39px' }}
        ></img>
        <div>
          <Button>
            <MainText>Company</MainText>
            <p
              style={{
                fontFamily: 'Noto Sans KR',
                fontSize: 13,
                color: 'white',
              }}
            >
              회사소개
            </p>
          </Button>
          <Button>
            <MainText>Business</MainText>
            <p
              style={{
                fontFamily: 'Noto Sans KR',
                fontSize: 13,
                color: 'white',
              }}
            >
              비즈니스
            </p>
          </Button>
          <Button>
            <MainText>{'Products & Service'}</MainText>
            <p
              style={{
                fontFamily: 'Noto Sans KR',
                fontSize: 13,
                color: 'white',
              }}
            >
              {'제품 & 서비스'}
            </p>
          </Button>
          <Button>
            <MainText>Recruitment</MainText>
            <p
              style={{
                fontFamily: 'Noto Sans KR',
                fontSize: 13,
                color: 'white',
              }}
            >
              채용정보
            </p>
          </Button>
          <select
            style={{ backgroundColor: 'black', color: 'white', padding: 5 }}
          >
            <option value={''} disabled selected hidden>
              Language
            </option>
            <option>Korea / 한국</option>
            <option>Global / English</option>
          </select>
        </div>
      </Header>
      {children}
    </>
  )
}

const Header = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
`

const Button = styled.button`
  background-color: black;
  border: 0px;
  padding: 0px 30px 0px 30px;
  cursor: pointer;
`

const MainText = styled.text`
  font-family: 'Noto Sans KR';
  font-size: 17px;
  color: white;
  font-weight: bold;
`

export default AppLayout
