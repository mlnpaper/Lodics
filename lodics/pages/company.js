import React, { useContext, useEffect, useState } from 'react';
import { AppLayout, CeoGreeting, Certification, History, Location, SubMenu } from 'components';
import { GlobalStateContext } from 'context';
import { palette } from '@styles/color';
import styled from 'styled-components';
import Head from 'next/head';

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

const subSelectList = [
  [
    { value: 'ceoGreeting', text: 'CEO 인사말' },
    { value: 'history', text: '연혁' },
    { value: 'certification', text: '인증현황' },
    { value: 'location', text: '회사위치' },
  ],
];

export default function company() {
  const { subSelectedComponent, setSubSelectedComponent } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<CeoGreeting />);

  useEffect(() => {
    if (subSelectedComponent === 'ceoGreeting') setSelectedComponent(<CeoGreeting />);
    if (subSelectedComponent === 'history') setSelectedComponent(<History />);
    if (subSelectedComponent === 'certification') setSelectedComponent(<Certification />);
    if (subSelectedComponent === 'location') setSelectedComponent(<Location />);
  }, [subSelectedComponent]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 페이지에서 나갔을 때 subSelectedComponent 초기값으로 초기화
    return setSubSelectedComponent('ceoGreeting');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Company</title>
      </Head>
      <AppLayout theme='black' page='Company'>
        <SubMenu title='Company' subSelectList={subSelectList} />
        <PageContainer>{selectedComponent}</PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
