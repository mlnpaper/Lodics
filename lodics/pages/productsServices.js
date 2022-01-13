import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '@context/globalStateContext';
import { AppLayout, EGovernment, KeyTechnology, DevelopmentPerformance } from 'components';
import { PageContainer } from '@pages/company';
import Head from 'next/head';
import {
  productsServicesSubSelectListKorean,
  productsServicesSubSelectListEnglish,
} from '@data/language/productsServices';

export default function productsServices() {
  const { subSelectedComponent, setSubSelectedComponent, setSelectedMenu, language } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<KeyTechnology />);

  const subSelectList =
    language === 'korea' ? productsServicesSubSelectListKorean : productsServicesSubSelectListEnglish;

  useEffect(() => {
    if (subSelectedComponent === 'eGovernment') setSelectedComponent(<EGovernment />);
    else if (subSelectedComponent === 'keyTechnology') setSelectedComponent(<KeyTechnology />);
    else if (subSelectedComponent === 'developmentPerformance') setSelectedComponent(<DevelopmentPerformance />);
  }, [subSelectedComponent]);

  useEffect(() => {
    setSelectedMenu('productsServices');

    //페이지에서 나갔을 때 subSelectedComponent 초기값으로 초기화
    return setSubSelectedComponent('keyTechnology');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Products & Services</title>
      </Head>
      <AppLayout theme='black' page='Products & Services' value='productsServices' subSelectList={subSelectList}>
        <PageContainer> {selectedComponent} </PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
