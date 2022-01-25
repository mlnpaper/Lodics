import React from 'react';

import { Container } from './styles';

export default function PageSemiTitle({ title, color, fontWeight = 400 }) {
  return (
    <Container $color={color} $fontWeight={fontWeight}>
      <span>{title}</span>
    </Container>
  );
}
