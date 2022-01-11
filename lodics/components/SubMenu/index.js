import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Container, MenuContainer, MenuInnerContainer, HomeIcon } from './styles';
import Router from 'next/router';
import { GlobalStateContext } from 'context';
import { Select } from 'components';

const mainSelect = [
  { value: 'company', text: 'Company' },
  { value: 'business', text: 'Business' },
  { value: 'productsServices', text: 'Products & Services' },
  { value: 'recruitment', text: 'Recruit' },
];

export default function SubMenu({ title, subSelectList = [] }) {
  const [newSubSelectList, setNewSubSelectList] = useState(subSelectList);
  const [currentSelect, setCurrentSelect] = useState('');
  const { setSubSelectedComponent, selectedSubMenu, setSelectedSubMenu } = useContext(GlobalStateContext);
  const [isOpen, setIsOpen] = useState(false);

  const onClicktoGoHome = useCallback(() => {
    Router.push('/');
  }, []);

  const onClickSelect = useCallback(
    e => {
      let targetId;
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

  const onClickOption = (e, setSelectedOption) => {
    if (!isOpen || +e.target.parentElement.previousSibling.id !== selectedSubMenu) return null;
    else {
      const value = e.target.id;
      const text = e.target.innerText;

      setCurrentSelect(value);
      if (value === 'company' || value === 'business' || value === 'productsServices' || value === 'recruitment') {
        Router.push(`/${value}`);
        setSelectedSubMenu('');
        setIsOpen(false);
      } else {
        setSubSelectedComponent(value);
        setSelectedOption(text);
        setSelectedSubMenu('');
        setIsOpen(false);
      }
    }
  };

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

  // option이 열려 있을 때 다른 페이지로 이동 시 닫기
  useEffect(() => {
    return () => {
      setSelectedSubMenu('');
      setIsOpen(false);
    };
  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      <MenuContainer>
        <MenuInnerContainer>
          <i onClick={onClicktoGoHome}>
            <HomeIcon />
          </i>
          <Select
            defaultValue={title}
            selectList={mainSelect}
            onClickSelect={onClickSelect}
            selectNumber={0}
            onClickOption={onClickOption}
          />
          {!!newSubSelectList.length &&
            newSubSelectList.map((subSelect, i) => (
              <Select
                defaultValue={subSelect[0]['text']}
                selectList={subSelect}
                onClickSelect={onClickSelect}
                selectNumber={i + 1}
                onClickOption={onClickOption}
                key={i}
              />
            ))}
        </MenuInnerContainer>
      </MenuContainer>
    </Container>
  );
}
