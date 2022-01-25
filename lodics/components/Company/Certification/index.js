import React, { useContext } from 'react';

import GlobalStateContext from '@context/globalStateContext';
import { certificationKorean, certificationEnglish } from '@data/language/certification';

import { CertificationCard, PageSemiTitle, PageTitle } from 'components';
import { palette } from '@styles/color';
import { Container } from './styles';

export default function Certification() {
  const { language } = useContext(GlobalStateContext);

  const currentLanguage = language === 'korea' ? certificationKorean : certificationEnglish;

  return (
    <React.Fragment>
      <PageTitle title={currentLanguage.pageTitle} />
      <PageSemiTitle title={currentLanguage.certificationDetailsSemiTitle} color={palette.themeBlack} />
      <Container>
        {currentLanguage.certificationDetails.map(({ key, img, title }) => (
          <CertificationCard key={key} img={img} title={title} />
        ))}
      </Container>
      <PageSemiTitle title={currentLanguage.certificationPatentSemiTitle} color={palette.themeBlack} />
      <Container>
        {currentLanguage.certificationPatent.map(({ key, img, title }) => (
          <CertificationCard key={key} img={img} title={title} />
        ))}
      </Container>
      <PageSemiTitle title={currentLanguage.programRegistrationSemititle} color={palette.themeBlack} />
      <Container>
        {currentLanguage.programRegistration.map(({ key, img, title }) => (
          <CertificationCard key={key} img={img} title={title} />
        ))}
      </Container>
    </React.Fragment>
  );
}
