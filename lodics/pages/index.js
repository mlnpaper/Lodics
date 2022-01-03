import styled from 'styled-components'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { FaHandsHelping } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <AppLayout>
        <Container>
          <Div>
            <MainText
              style={{ color: 'white', fontSize: 32, fontWeight: '700' }}
            >
              Leaders of GEOINT
            </MainText>
            <SubText>
              {
                '로딕스는 특수분야의 사업수행 경험을 바탕으로\n 센서기반 공간정보 응용 솔루션 개발, GIS 솔루션 시장, GIS DB 구축 사업을 추진합니다.'
              }
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
        </Container>
      </AppLayout>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  /* zindex: 0; */
  top: 90px;
  left: 0;
  width: 100%;
  min-height: 80vh;
`
const Div = styled.div`
  position: absolute;
  text-align: center;
`

const MainText = styled.div`
  margin: 150px 0px 20px 0px;
  color: white;
  font-size: 32px;
  font-weight: 700;
`

const SubText = styled.div`
  white-space: pre-wrap;
  color: white;
  font-size: 20px;
  font-weight: 300;
`

const WrapBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  background-color: rgba(0, 0, 0, 0.5);
  width: 1200px;
  height: 300px;
  top: 410px;
`

const Box = styled.div`
  flex: 1;
  height: 100%;
  flex-direction: column;
  display: flex;
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
  /* padding: 10px 10px 10px 10px; */
  margin: 20px 0px 0px 0px;
  border: 1px solid white;
  cursor: pointer;
`
