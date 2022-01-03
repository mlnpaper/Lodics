import React from 'react';
import { CardContainer, ImgContainer } from './styles';

export default function Card({ key, img, title }) {
  return (
    <CardContainer key={key}>
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>
      <p>{title}</p>
    </CardContainer>
  );
}
