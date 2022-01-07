import React from 'react';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <ul>
        <li>
          <span>(주)로딕스</span>
        </li>
        <li>
          <span>대표이사 : 이승우</span>
        </li>
        <li>
          <span>서울특별시 성동구 상원4길 6-1 태양빌딩 3층 (성수동1가 14-32)</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>TEL : </span>
          <a href='tel:02.403.1160'>
            <span> 02.403.1160</span>
          </a>
        </li>
        <li>
          <span>FAX : </span>
          <span> 070.7966.1165</span>
        </li>
        <li>
          <span>Email : </span>
          <a href='mailto:lodics_recruit@lodics.com'>
            <span> lodics_recruit@lodics.com</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <span>COPYRIGHT © 2018 LoDiCS. CO., LTD. ALL RIGHTS RESERVED.</span>
        </li>
      </ul>
    </Container>
  );
}
