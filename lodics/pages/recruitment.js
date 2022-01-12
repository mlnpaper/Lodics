import React, { useContext, useEffect } from 'react';
import { AppLayout, Recruitment } from 'components';
import { PageContainer } from '@pages/company';
import Head from 'next/head';
import GlobalStateContext from '@context/globalStateContext';

export default function recruitment() {
  const { setSelectedMenu } = useContext(GlobalStateContext);

  useEffect(() => {
    setSelectedMenu('recruitment');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Recruit</title>
      </Head>
      <AppLayout theme='black' page='Recruit' value='recruitment'>
        <PageContainer>
          <Recruitment />
        </PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
