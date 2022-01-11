import React, { useEffect } from 'react';
import { AppLayout, Card, IntroText } from 'components';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  background: center / cover no-repeat url('img/basic_bg.jpg');
  animation: scaleAnimation 10s cubic-bezier(0.4, 0.4, 0.4, 1) 0s infinite normal forwards;

  @keyframes scaleAnimation {
    0% {
      transform: scale(1.4);
      filter: blur(1px);
    }
    20% {
      filter: blur(0);
    }
    95% {
      filter: brightness(1);
    }
    100% {
      transform: scale(1);
      filter: brightness(1.1);
    }
  }
`;

export const CardContainer = styled.div`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 0 10rem;

  @media all and (min-width: 768px) {
    /* -------------------------------------------------------------------------- */
    /*                                   테블릿                                    */
    /* -------------------------------------------------------------------------- */
    flex-flow: row nowrap;
    margin: 0 auto 5rem;
  }

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <AppLayout theme='white' page='Home'>
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
