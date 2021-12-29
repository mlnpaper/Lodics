import React from 'react';
import { YearsContainer } from './styles';

export default function Years({ year }) {
  return (
    <YearsContainer>
      <span>{year}'s</span>
    </YearsContainer>
  );
}
