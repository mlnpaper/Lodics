import React, { useContext, useEffect } from 'react';

import GlobalStateContext from '@context/globalStateContext';

import { Footer, Header, ScrollToTop, SubMenu } from 'components';
import { Container } from './styles';

export default function AppLayout({ children, theme, page, value = '', subSelectList = [] }) {
  const { language, setLanguage } = useContext(GlobalStateContext);

  useEffect(() => {
    // window scroll 초기화
    window.scrollTo(0, 0);
    // language 초기화
    const initialLanguage = sessionStorage.getItem('language');
    setLanguage(initialLanguage || 'korea');
  }, []);

  useEffect(() => {
    sessionStorage.setItem('language', language);
  }, [language]);

  return (
    <Container $theme={theme}>
      <Header theme={theme} page={page} />
      {page !== 'Home' && <SubMenu title={page} value={value} subSelectList={subSelectList} />}
      {children}
      <Footer />
      {page !== 'Home' && <ScrollToTop />}
    </Container>
  );
}
