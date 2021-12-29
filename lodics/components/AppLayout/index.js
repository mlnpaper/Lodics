import { useRouter } from 'next/router';
import React from 'react';
import { Footer, Header, SubMenu } from '..';
import { Container } from './styles';

const changeTitleText = text => {
  if (text === '/company') return 'Company';
  if (text === '/business') return 'Business';
  if (text === '/productsServices') return 'Products & Services';
  if (text === '/recruitment') return 'Recruitment';
};

export default function AppLayout({ children, theme }) {
  const router = useRouter();

  return (
    <Container $theme={theme}>
      <Header theme={theme} />
      {theme === 'black' && <SubMenu title={changeTitleText(router.pathname)} />}
      {children}
      <Footer />
    </Container>
  );
}
