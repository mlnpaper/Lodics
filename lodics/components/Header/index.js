import React from 'react';
import { Container, InnerContainer } from './styles';
import Link from 'next/link';

export default function Header({ theme }) {
  return (
    <Container>
      <InnerContainer $theme={theme}>
        <Link href='/'>
          <a>
            <img src={theme === 'white' ? 'img/logo_w.png' : 'img/logo_b.png'} alt='로딕스 로고' />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href='/company'>
                <a>
                  <span>Company</span>
                  <span>회사소개</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/business'>
                <a>
                  <span>Business</span>
                  <span>비즈니스</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/productsServices'>
                <a>
                  <span>Products & Services</span>
                  <span>제품 & 서비스</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/recruitment'>
                <a>
                  <span>Recruitment</span>
                  <span>채용정보</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </InnerContainer>
    </Container>
  );
}
