import React, { useCallback, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import GlobalStateContext from '@context/globalStateContext';

import { CloseMenuIcon, Container, InnerContainer, MenuIcon, ToggleNavContainer, TabContainer } from './styles';

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
  const { selectedMenu, setSelectedMenu, language, setLanguage } = useContext(GlobalStateContext);

  // viewport 값에 따라 모바일 용 toggleNav 표출 유/무
  const onResize = () => {
    if (window.innerWidth < 768) {
      setShowToggleNav(true);
    } else {
      setShowToggleNav(false);
      setOpenToggleNav(false);
    }
  };

  // 모바일 toggleNav 열기/닫기 toggle 기능
  const onClick = useCallback(() => {
    setOpenToggleNav(!openToggleNav);
  }, [openToggleNav]);

  // 모바일 toggleNav 닫기 기능
  const onClose = useCallback(() => {
    setOpenToggleNav(false);
  }, []);

  // 모바일 toggleNav 열기/닫기 기능
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

  const onChangeMenu = useCallback((e, newValue) => {
    setSelectedMenu(newValue);
  }, []);

  const onClickMenu = useCallback(e => {
    Router.push(`/${e.target.id}`);
  }, []);

  const onChangeLanguage = useCallback((e, newValue) => {
    setLanguage(newValue.props.value);
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
            <TabContainer $theme={theme}>
              <Box sx={{ width: '100%' }}>
                <Tabs value={selectedMenu} aria-label='wrapped label tabs example' onChange={onChangeMenu}>
                  <Tab value='company' id='company' label='Company' wrapped onClick={onClickMenu} />
                  <Tab value='business' id='business' label='Business' onClick={onClickMenu} />
                  <Tab
                    value='productsServices'
                    id='productsServices'
                    label='Products & Services'
                    onClick={onClickMenu}
                  />
                  <Tab value='recruitment' id='recruitment' label='Recruit' onClick={onClickMenu} />
                </Tabs>
              </Box>
              <Box sx={{ width: '30%' }}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Language</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={language}
                    label='Language'
                    onChange={onChangeLanguage}
                  >
                    <MenuItem value='korea'>Korea | 한국어</MenuItem>
                    <MenuItem value='global'>Global | English</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </TabContainer>
          )}
        </nav>
      </InnerContainer>
    </Container>
  );
}
