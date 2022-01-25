import React, { useContext, useEffect, useState } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { ceoGreetingKorean, ceoGreetingEnglish } from '@data/language/ceoGreeting';

import { PageTitle } from 'components';
import { HeadLineContainer, ContentContainer, SignContainer } from './styles';

export default function CeoGreeting() {
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? ceoGreetingKorean : ceoGreetingEnglish;

  // viewport 사이즈에 따라 mobile 환경 확인
  const onResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <React.Fragment>
      <PageTitle title={currentLanguage.pageTitle} />
      <HeadLineContainer>{currentLanguage.headLind(isMobile)}</HeadLineContainer>
      <ContentContainer>{currentLanguage.content(isMobile)}</ContentContainer>
      <SignContainer>
        <span>{currentLanguage.ceo[0]}</span>
        <em>{currentLanguage.ceo[1]}</em>
      </SignContainer>
    </React.Fragment>
  );
}
