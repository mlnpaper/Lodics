import React, { useContext } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { keyBusinessEnglish, keyBusinessKorean } from '@data/language/keybusiness';

import { PageTitle } from 'components';
import { ImgContainer } from './styles';

export default function KeyBusiness() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? keyBusinessKorean : keyBusinessEnglish;

  return (
    <React.Fragment>
      <PageTitle title={currentLanguage.pageTitle} />
      <ImgContainer>
        <img src={currentLanguage.img} alt={currentLanguage.pageTitle} />
      </ImgContainer>
    </React.Fragment>
  );
}
