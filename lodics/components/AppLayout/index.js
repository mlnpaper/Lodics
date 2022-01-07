import React from 'react';
import { Footer, Header } from 'components';
import { Container } from './styles';

export default function AppLayout({ children, theme }) {
  return (
    <Container $theme={theme}>
      <Header theme={theme} />
      {children}
      <Footer />
    </Container>
  );
}
