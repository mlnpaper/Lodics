import styled from 'styled-components'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { FaHandsHelping } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Container>
        <AppLayout theme="white">
          <Div>
            <MainText>Leaders of GEOINT</MainText>
            <SubText>로딕스는 특수분야의 사업수행 경험을 바탕으로</SubText>
            <SubText>
              센서기반 공간정보 응용 솔루션 개발, GIS 솔루션 시장, GIS DB 구축
              사업을 추진합니다.
            </SubText>
          </Div>
          <WrapBox>
            <Box>
              <BoxButton hoverColor={'rgba(0, 89, 129, 0.4)'}>
                <Link href="/business">
                  <a>
                    <HiOutlineOfficeBuilding
                      style={{
                        color: 'white',
                        width: 50,
                        height: 50,
                        marginBottom: 10,
                      }}
                    />
                    <BoxMainText>Business</BoxMainText>
                    <BoxSubText>LoDics의 사업분야를 소개합니다</BoxSubText>
                    <Button>바로가기</Button>
                  </a>
                </Link>
              </BoxButton>
            </Box>

            <Box>
              <BoxButton hoverColor={'rgba(0,129,91,.4)'}>
                <Link href="/productsServices">
                  <a>
                    <FaHandsHelping
                      style={{
                        color: '#ffffff',
                        width: 50,
                        height: 50,
                        marginBottom: 10,
                      }}
                    />
                    <BoxMainText>{'Products & Services'}</BoxMainText>
                    <BoxSubText>LoDics의 보유기술을 소개합니다</BoxSubText>
                    <Button>바로가기</Button>
                  </a>
                </Link>
              </BoxButton>
            </Box>
            <Box style={{ border: 0 }}>
              <BoxButton hoverColor={'rgba(116, 87, 41, .4)'}>
                <Link href="/recruitment">
                  <a>
                    <FaHandsHelping
                      style={{
                        color: 'white',
                        width: 50,
                        height: 50,
                        marginBottom: 10,
                      }}
                    />
                    <BoxMainText>Recruitment</BoxMainText>
                    <BoxSubText>LoDics의 채용정보를 알려드립니다.</BoxSubText>
                    <Button>바로가기</Button>
                  </a>
                </Link>
              </BoxButton>
            </Box>
          </WrapBox>
        </AppLayout>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  background: center / cover no-repeat url('img/basic_bg.jpg');
  overflow: hidden;
`
const Div = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const MainText = styled.div`
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
`

const SubText = styled.div`
  white-space: pre-wrap;
  color: white;
  font-size: 20px;
  font-weight: 300;
`

const WrapBox = styled.div`
  display: flex;
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  background-color: #333;
  background-color: rgba(0, 0, 0, 0.5);
`

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`

const BoxButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;
  cursor: pointer;
  &:hover {
    background: ${props => props.hoverColor};
  }
`

const BoxMainText = styled.div`
  color: white;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 10px;
`

const BoxSubText = styled.div`
  color: white;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
`

const Button = styled.button`
  width: 180px;
  height: 30px;
  background-color: white;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 14px;
  margin: 20px 0px 0px 0px;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`
