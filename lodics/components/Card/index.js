import React, { useCallback } from 'react';
import { Container } from './styles';
import Router from 'next/router';

export default function Card({ menu, description, link }) {
  const onClick = useCallback(() => {
    Router.push(`/${link}`);
  }, []);

  return (
    <Container onClick={onClick} $type={link}>
      <i />
      <span>{menu}</span>
      <span>{description}</span>
      <button type='button'>바로가기</button>
    </Container>
  );
}
