import React from 'react';
import { Footer, Header } from '..';
import { Container } from './styles';

export default function AppLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
