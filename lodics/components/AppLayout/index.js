import React from 'react';
import { Footer, Header, ScrollToTop } from 'components';
import { Container } from './styles';

export default function AppLayout({ children, theme, page }) {
  return (
    <Container $theme={theme}>
      <Header theme={theme} page={page} />
      {children}
      <Footer />
      {page !== 'Home' && <ScrollToTop />}
    </Container>
  );
}
