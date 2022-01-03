import { AppLayout, Card } from '../components';
import styled from 'styled-components';
import { palette } from '../styles/color';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: center / cover no-repeat url('img/basic_bg.jpg');
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 1200px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  color: ${palette.themeWhite};
  display: flex;
  flex-flow: column;
  backdrop-filter: grayscale(50%);

  span {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
    text-align: center;
    color: ${palette.themeWhite};
  }

  span + span {
    font-size: 2rem;
    font-weight: 300;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export default function Home() {
  return (
    <Container>
      <AppLayout theme='white'>
        <TextContainer>
          <span>Leaders of GEOINT</span>
          <span>로딕스는 특수분야의 사업수행 경험을 바탕으로</span>
          <span>센서기반 공간정보 응용 솔루션 개발, GIS 솔루션 시장, GIS DB 구축 사업을 추진합니다.</span>
        </TextContainer>
        <CardContainer>
          <Card menu='Business' description='LoDiCS의 사업분야를 소개합니다' link='business' />
          <Card menu='Producs & Services' description='LoDiCS의 보유기술을 소개합니다' link='productsServices' />
          <Card menu='Recruitment' description='LoDiCS의 채용정보를 알려드립니다' link='recruitment' />
        </CardContainer>
      </AppLayout>
    </Container>
  );
}
