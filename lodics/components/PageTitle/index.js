import React from 'react';

import { Container } from './styles';

export default function PageTitle({ title }) {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
}
