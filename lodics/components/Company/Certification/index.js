import React from 'react';
import { Container } from './styles';
import { CertificationCard, PageSemiTitle, PageTitle } from 'components';
import { palette } from '@styles/color';
import { certificationDetails, certificationPatent, programRegistration } from '@data/certification';

export default function Certification() {
  return (
    <React.Fragment>
      <PageTitle title='인증현황' />
      <PageSemiTitle title='인증내역' color={palette.themeBlack} />
      <Container>
        {certificationDetails.map(({ key, img, title }) => (
          <CertificationCard key={key} img={img} title={title} />
        ))}
      </Container>
      <PageSemiTitle title='특허증' color={palette.themeBlack} />
      <Container>
        {certificationPatent.map(({ key, img, title }) => (
          <CertificationCard key={key} img={img} title={title} />
        ))}
      </Container>
      <PageSemiTitle title='프로그램 등록증' color={palette.themeBlack} />
      <Container>
        {programRegistration.map(({ key, img, title }) => (
          <CertificationCard key={key} img={img} title={title} />
        ))}
      </Container>
    </React.Fragment>
  );
}
