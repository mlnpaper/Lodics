import React from 'react';
import { Footer, Header } from '..';
import { Container } from './styles';

export default function AppLayout({ children, theme }) {
  return (
    <Container>
      <Header theme={theme} />
      {children}
      <Footer />
    </Container>
  );
}
