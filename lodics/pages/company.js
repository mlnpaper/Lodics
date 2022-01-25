import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { companySubSelectListEnglish, companySubSelectListKorean } from '@data/language/company';

import { GlobalStateContext } from 'context';
import { AppLayout, CeoGreeting, Certification, History, Location } from 'components';
import { palette } from '@styles/color';

export const PageContainer = styled.section`
  /* -------------------------------------------------------------------------- */
  /*                               모바일  & default                             */
  /* -------------------------------------------------------------------------- */
  width: calc(100% - 5rem);
  margin: 8rem auto;
  color: ${palette.themeBlack};

  @media all and (min-width: 1200px) {
    /* -------------------------------------------------------------------------- */
    /*                              데스크탑 일반                                  */
    /* -------------------------------------------------------------------------- */
    width: 1200px;
  }
`;

export default function company() {
  const { subSelectedComponent, setSubSelectedComponent, setSelectedMenu, language } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<CeoGreeting />);

  const subSelectList = language === 'korea' ? companySubSelectListKorean : companySubSelectListEnglish;

  useEffect(() => {
    if (subSelectedComponent === 'ceoGreeting') setSelectedComponent(<CeoGreeting />);
    if (subSelectedComponent === 'history') setSelectedComponent(<History />);
    if (subSelectedComponent === 'certification') setSelectedComponent(<Certification />);
    if (subSelectedComponent === 'location') setSelectedComponent(<Location />);
  }, [subSelectedComponent]);

  useEffect(() => {
    setSelectedMenu('company');

    // 페이지에서 나갔을 때 subSelectedComponent 초기값으로 초기화
    return setSubSelectedComponent('ceoGreeting');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Company</title>
      </Head>
      <AppLayout theme='black' page='Company' value='company' subSelectList={subSelectList}>
        <PageContainer>{selectedComponent}</PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
