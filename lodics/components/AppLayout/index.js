import React from 'react';
import { Footer, Header } from '..';

export default function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
