import React, { useEffect } from 'react';
import { AppLayout, Card } from '../../components';
import { CardContainer, Container, TextContainer } from './styles';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
