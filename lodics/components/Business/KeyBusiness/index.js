import React from 'react';
import { PageTitle } from 'components';
import { ImgContainer } from './styles';

export default function KeyBusiness() {
  return (
    <React.Fragment>
      <PageTitle title='주요사업분야' />
      <ImgContainer>
        <img src='img/business/biz02_01.png' alt='주요사업분야' />
      </ImgContainer>
    </React.Fragment>
  );
}
