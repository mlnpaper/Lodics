import React, { useContext, useEffect, useState } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { introTextEnglish, introTextKorean } from '@data/language/introText';

import { Container } from './styles';

const getFirstIntro = currentLanguage => (
  <React.Fragment>
    <span className='first_line'>{currentLanguage.firstIntrofirstLine}</span>
    <span className='second_line'>{currentLanguage.firstIntroSecondLine}</span>
  </React.Fragment>
);

const getSecondIntro = currentLanguage => (
  <React.Fragment>
    <span className='first_line'>{currentLanguage.secondIntroFirstLine}</span>
    <span className='second_line'>{currentLanguage.secondIntroSecondLine}</span>
  </React.Fragment>
);

export default function IntroText() {
  const [introText, setIntroText] = useState(1);
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? introTextKorean : introTextEnglish;

  // 10초마다 IntroText 바뀜 / firstInrto → secondIntro
  useEffect(() => {
    const timeId = setInterval(() => {
      if (introText === 1) {
        setIntroText(2);
      } else {
        setIntroText(1);
      }
    }, 10000);

    return () => clearInterval(timeId);
  }, [introText]);

  return <Container>{introText === 1 ? getFirstIntro(currentLanguage) : getSecondIntro(currentLanguage)}</Container>;
}
