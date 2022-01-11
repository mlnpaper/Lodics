import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '@context/globalStateContext';
import { AppLayout, SubMenu, EGovernment, KeyTechnology, DevelopmentPerformance } from 'components';
import { PageContainer } from '@pages/company';
import Head from 'next/head';

const subSelectList = [
  [
    { value: 'keyTechnology', text: '핵심기술' },
    { value: 'eGovernment', text: '전자정부사업' },
    { value: 'developmentPerformance', text: '연구개발실적' },
  ],
  [
    {
      value: 'srp',
      text: '스마트 방사능방재 지휘통제 시스템 구축',
    },
    {
      value: 'qubism',
      text: '실감형 3D 도시모델 저작 및 제공 기술 개발',
    },
    {
      value: 'wiss',
      text: '국가해양영토 광역 감시망 구축 기반연구 통합분석 시스템',
    },
    { value: 'pev', text: '긴급차량 동적 가이던스 시스템 연구' },
    {
      value: 'geoint',
      text: '다중센서 분산처리 및 GCOINT자료 통합처리 시스템',
    },
  ],
];

export default function productsServices() {
  const { subSelectedComponent, setSubSelectedComponent } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<KeyTechnology />);

  useEffect(() => {
    if (subSelectedComponent === 'eGovernment') setSelectedComponent(<EGovernment />);
    else if (subSelectedComponent === 'keyTechnology') setSelectedComponent(<KeyTechnology />);
    else if (subSelectedComponent === 'developmentPerformance') setSelectedComponent(<DevelopmentPerformance />);
  }, [subSelectedComponent]);

  useEffect(() => {
    window.scrollTo(0, 0);

    //페이지에서 나갔을 때 subSelectedComponent 초기값으로 초기화
    return setSubSelectedComponent('keyTechnology01');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Products & Services</title>
      </Head>
      <AppLayout theme='black' page='Products & Services'>
        <SubMenu title={'Products & Services'} subSelectList={subSelectList} />
        <PageContainer> {selectedComponent} </PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
