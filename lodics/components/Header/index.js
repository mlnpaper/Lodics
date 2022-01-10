import React, { useCallback, useEffect, useState } from 'react';
import { CloseMenuIcon, Container, InnerContainer, MenuIcon, ToggleNavContainer } from './styles';
import Link from 'next/link';

const createNavElement = (url, en, ko = '') => (
  <li>
    <Link href={url}>
      <a>
        <span>{en}</span>
        <span>{ko}</span>
      </a>
    </Link>
  </li>
);

const createMobileNavElement = (url, en, onClickNav) => (
  <li onClick={onClickNav}>
    <Link href={url}>
      <a>
        <span>{en}</span>
      </a>
    </Link>
  </li>
);

export default function Header({ theme, page }) {
  const [showToggleNav, setShowToggleNav] = useState(false);
  const [openToggleNav, setOpenToggleNav] = useState(false);

  const onResize = () => {
    if (window.innerWidth < 768) {
      setShowToggleNav(true);
    } else {
      setShowToggleNav(false);
      setOpenToggleNav(false);
    }
  };

  const onClick = useCallback(() => {
    setOpenToggleNav(!openToggleNav);
  }, [openToggleNav]);

  const onClose = useCallback(() => {
    setOpenToggleNav(false);
  }, []);

  const onClickNav = useCallback(
    e => {
      if (e.target.innerText === page) {
        setOpenToggleNav(false);
      }
    },
    [page]
  );

  useEffect(() => {
    if (window.innerWidth < 768) {
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
            <React.Fragment>
              <MenuIcon onClick={onClick} $theme={theme} />
              <ToggleNavContainer $openToggleNav={openToggleNav}>
                {createMobileNavElement('/', 'Home', onClickNav)}
                {createMobileNavElement('/company', 'Company', onClickNav)}
                {createMobileNavElement('/business', 'Business', onClickNav)}
                {createMobileNavElement('/productsServices', 'Products & Services', onClickNav)}
                {createMobileNavElement('/recruitment', 'Recruit', onClickNav)}
              </ToggleNavContainer>
              <CloseMenuIcon onClick={onClose} $openToggleNav={openToggleNav} />
            </React.Fragment>
          ) : (
            <ul>
              {createNavElement('/company', 'Company', '회사소개')}
              {createNavElement('/business', 'Business', '비즈니스')}
              {createNavElement('/productsServices', 'Products & Services', '제품 & 서비스')}
              {createNavElement('/recruitment', 'Recruit', '채용정보')}
            </ul>
          )}
        </nav>
      </InnerContainer>
    </Container>
  );
}
