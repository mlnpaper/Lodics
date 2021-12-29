import React from 'react';
import { Container } from './styles';

export default function PageSemiTitle({ title, color }) {
  return (
    <Container $color={color}>
      <span>{title}</span>
    </Container>
  );
}
