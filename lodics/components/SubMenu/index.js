import React, { useCallback, useContext, useEffect, useState } from 'react';
import Router from 'next/router';

import { GlobalStateContext } from 'context';

import { Select } from 'components';
import { Container, MenuContainer, MenuInnerContainer } from './styles';

const mainSelect = [
  { value: 'company', text: 'Company' },
  { value: 'business', text: 'Business' },
  { value: 'productsServices', text: 'Products & Services' },
  { value: 'recruitment', text: 'Recruit' },
];

export default function SubMenu({ title, subSelectList = [] }) {
  const [newSubSelectList, setNewSubSelectList] = useState(subSelectList);
  const [currentSelect, setCurrentSelect] = useState('');
  const { setSubSelectedComponent, selectedSubMenu, setSelectedSubMenu, language, selectedMenu } =
    useContext(GlobalStateContext);
  const [isOpen, setIsOpen] = useState(false);

  const onClicktoGoHome = useCallback(() => {
    Router.push('/');
  }, []);

  // select 열기/닫기 기능
  const onClickSelect = useCallback(
    e => {
      let targetId;
      // select 자식 노드 전체 선택
      if (e.target.localName === 'button') {
        targetId = Number(e.target.id);
      } else if (e.target.localName === 'span' || e.target.localName === 'i') {
        targetId = Number(e.target.parentElement.id);
      } else if (e.target.localName === 'svg') {
        targetId = Number(e.target.parentElement.parentElement.id);
      } else if (e.target.localName === 'path') {
        targetId = Number(e.target.parentElement.parentElement.parentElement.id);
      }

      if (selectedSubMenu === targetId) {
        setIsOpen(false);
        setSelectedSubMenu('');
      } else {
        setIsOpen(true);
        setSelectedSubMenu(targetId);
      }
    },
    [selectedSubMenu]
  );

  // option 선택 시 해당 값에 따라 다른 기능 동작 (하기 설명)
  const onClickOption = (e, setSelectedOption) => {
    if (!isOpen || +e.target.parentElement.previousSibling.id !== selectedSubMenu) {
      setIsOpen(false);
      setSelectedSubMenu('');
    } else {
      const value = e.target.id;
      const text = e.target.innerText;

      setCurrentSelect(value);
      // page를 포함하는 select option 선택 시 해당 페이지로 이동
      if (value === 'company' || value === 'business' || value === 'productsServices' || value === 'recruitment') {
        Router.push(`/${value}`);
        setSelectedSubMenu('');
        setIsOpen(false);
      } else {
        // page가 아닌 component option 선택 시 해당 컴포넌트 상태값 변경
        setSubSelectedComponent(value);
        setSelectedOption(text);
        setSelectedSubMenu('');
        setIsOpen(false);
      }
    }
  };

  // option이 열려 있을 때 다른 페이지로 이동 시 닫기
  useEffect(() => {
    return () => {
      setSelectedSubMenu('');
      setIsOpen(false);
    };
  }, []);

  // 언어 상태 변경에 따라 Products & Services 페이지에서 select 2~3개에 따라 화면 표출 변경 기능 적용
  useEffect(() => {
    if (selectedMenu === 'productsServices' && !currentSelect) setNewSubSelectList([subSelectList[0]]);
    else setNewSubSelectList(subSelectList);
  }, [language]);

  // Products & Services 페이지에서 select 2~3개에 따라 화면 표출 변경 기능 적용
  useEffect(() => {
    if (!!subSelectList.length) {
      if (
        currentSelect === 'developmentPerformance' ||
        currentSelect === 'srp' ||
        currentSelect === 'wiss' ||
        currentSelect === 'qubism' ||
        currentSelect === 'pev' ||
        currentSelect === 'geoint'
      )
        setNewSubSelectList(subSelectList);
      else setNewSubSelectList([subSelectList[0]]);
    }
  }, [currentSelect]);

  // 초기 렌더링 시 Products & Services 페이지에서 select 2~3개에 따라 화면 표출 변경 기능 적용
  useEffect(() => {
    if (selectedMenu === 'productsServices') setNewSubSelectList([subSelectList[0]]);
  }, [selectedMenu]);

  // select portal 적용
  const onClickPortal = () => {
    setSelectedSubMenu('');
    setIsOpen(false);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <MenuContainer>
        <MenuInnerContainer>
          <button onClick={onClicktoGoHome}>Home</button>
          <Select
            defaultValue={title}
            selectList={mainSelect}
            onClickSelect={onClickSelect}
            selectNumber={0}
            onClickOption={onClickOption}
          />
          {!!newSubSelectList.length &&
            !!newSubSelectList[0] &&
            newSubSelectList.map((subSelect, i) => {
              return (
                <Select
                  defaultValue={subSelect?.[0]['text']}
                  selectList={subSelect}
                  onClickSelect={onClickSelect}
                  selectNumber={i + 1}
                  onClickOption={onClickOption}
                  key={i}
                />
              );
            })}
        </MenuInnerContainer>
      </MenuContainer>
      {isOpen && <div className='portal' onClick={onClickPortal}></div>}
    </Container>
  );
}
