import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import GlobalStateContext from '@context/globalStateContext';
import { homeEnglish, homeKorean } from '@data/language/home';

import { AppLayout, Card, IntroText } from 'components';

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
  const { setSelectedMenu, language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? homeKorean : homeEnglish;

  useEffect(() => {
    setSelectedMenu('');
  }, []);

  return (
    <Container>
      <AppLayout theme='white' page='Home'>
        <Background />
        <IntroText />
        <CardContainer>
          <Card
            menu='Business'
            description={currentLanguage.cardBusinessDescription}
            more={currentLanguage.more}
            link='business'
          />
          <Card
            menu='Producs & Services'
            description={currentLanguage.cardPsDescription}
            more={currentLanguage.more}
            link='productsServices'
          />
          <Card
            menu='Recruitment'
            description={currentLanguage.cardRecruitmentDescription}
            more={currentLanguage.more}
            link='recruitment'
          />
        </CardContainer>
      </AppLayout>
    </Container>
  );
}
