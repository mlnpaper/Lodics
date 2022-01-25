import React, { useCallback } from 'react';

import { ArrowIcon, Container } from './styles';

export default function ScrollToTop() {
  const onMoveToTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container onClick={onMoveToTop}>
      <ArrowIcon />
      <span>TOP</span>
    </Container>
  );
}
