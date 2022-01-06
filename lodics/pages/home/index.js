import React, { useEffect } from 'react';
import { AppLayout, Card } from '../../components';
import IntroText from './IntroText';
import { CardContainer, Container, Background } from './styles';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <AppLayout theme='white'>
        <Background />
        <IntroText />
        <CardContainer>
          <Card menu='Business' description='LoDiCS의 사업분야를 소개합니다' link='business' />
          <Card menu='Producs & Services' description='LoDiCS의 보유기술을 소개합니다' link='productsServices' />
          <Card menu='Recruitment' description='LoDiCS의 채용정보를 알려드립니다' link='recruitment' />
        </CardContainer>
      </AppLayout>
    </Container>
  );
}
