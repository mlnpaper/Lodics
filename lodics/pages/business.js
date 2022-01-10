import React, { useContext, useEffect, useState } from 'react';
import { AppLayout, GoalsVisions, KeyBusiness, SubMenu } from 'components';
import { GlobalStateContext } from 'context';
import { PageContainer } from '@pages/company';
import Head from 'next/head';

const subSelectList = [
  [
    { value: 'goalsVisions', text: '목표와 비전' },
    { value: 'keyBusiness', text: '주요사업분야' },
  ],
];

export default function business() {
  const { subSelectedComponent, setSubSelectedComponent } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<GoalsVisions />);

  useEffect(() => {
    if (subSelectedComponent === 'goalsVisions') setSelectedComponent(<GoalsVisions />);
    if (subSelectedComponent === 'keyBusiness') setSelectedComponent(<KeyBusiness />);
  }, [subSelectedComponent]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 페이지에서 나갔을 때 subSelectedComponent 초기값으로 초기화
    return setSubSelectedComponent('goalsVisions');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Business</title>
      </Head>
      <AppLayout theme='black' page='Business'>
        <SubMenu title='Business' subSelectList={subSelectList} />
        <PageContainer>{selectedComponent}</PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
