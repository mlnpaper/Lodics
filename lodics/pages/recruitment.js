import React from 'react';
import { AppLayout, SubMenu, Recruitment } from 'components';
import { PageContainer } from '@pages/company';
import Head from 'next/head';

export default function recruitment() {
  return (
    <React.Fragment>
      <Head>
        <title>LoDiCS | Recruit</title>
      </Head>
      <AppLayout theme='black' page='Recruit'>
        <SubMenu title='Recruit' />
        <PageContainer>
          <Recruitment />
        </PageContainer>
      </AppLayout>
    </React.Fragment>
  );
}
