import React from 'react';

import { CardContainer, ImgContainer } from './styles';

export default function Card({ img, title }) {
  return (
    <CardContainer>
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>
      <p>{title}</p>
    </CardContainer>
  );
}
