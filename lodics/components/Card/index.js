import React, { useCallback } from 'react';
import Router from 'next/router';

import { Container, BusinessIcon, PSIcon, RecruitmentIcon } from './styles';

export default function Card({ menu, description, link, more }) {
  const onClick = useCallback(() => {
    Router.push(`/${link}`);
  }, []);

  return (
    <Container onClick={onClick} $type={link}>
      <i>{link === 'business' ? <BusinessIcon /> : link === 'productsServices' ? <PSIcon /> : <RecruitmentIcon />}</i>
      <span>{menu}</span>
      <span>{description}</span>
      <button type='button'>{more}</button>
    </Container>
  );
}
