import React, { useEffect, useState } from 'react';
import { Container, InnerContainer, MenuIcon, ToggleNavContainer } from './styles';
import Link from 'next/link';

const createNavElement = (url, ko, en = '', notResponsive = true) => (
  <li>
    <Link href={url}>
      <a>
        {notResponsive && <span>{en}</span>}
        <span>{ko}</span>
      </a>
    </Link>
  </li>
);

export default function Header({ theme }) {
  const [showToggleNav, setShowToggleNav] = useState(false);
  const [openToggleNav, setOpenToggleNav] = useState(false);

  const onResize = () => {
    if (window.screen.width < 768) {
      setShowToggleNav(true);
    } else {
      setShowToggleNav(false);
      setOpenToggleNav(false);
    }
  };

  const onClick = () => {
    setOpenToggleNav(!openToggleNav);
  };

  useEffect(() => {
    if (window.screen.width < 768) {
      setShowToggleNav(true);
      setOpenToggleNav(false);
    } else {
      setShowToggleNav(false);
    }

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <Container>
      <InnerContainer $theme={theme}>
        <Link href='/'>
          <a>
            <img src={theme === 'white' ? 'img/logo_w.png' : 'img/logo_b.png'} alt='로딕스 로고' />
          </a>
        </Link>
        <nav>
          {showToggleNav ? (
            <MenuIcon onClick={onClick} />
          ) : (
            <ul>
              {createNavElement('/company', '회사소개', 'Company')}
              {createNavElement('/business', '비즈니스', 'Business')}
              {createNavElement('/productsServices', '제품 & 서비스', 'Products & Services')}
              {createNavElement('/recruitment', '채용정보', 'Recruitment')}
            </ul>
          )}
          {openToggleNav && (
            <ToggleNavContainer>
              {createNavElement('/company', '회사소개')}
              {createNavElement('/business', '비즈니스')}
              {createNavElement('/productsServices', '제품 & 서비스')}
              {createNavElement('/recruitment', '채용정보')}
            </ToggleNavContainer>
          )}
        </nav>
      </InnerContainer>
    </Container>
  );
}
