import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Container, MenuContainer, MenuInnerContainer, HomeIcon } from './styles';
import Router from 'next/router';
import { Select } from 'antd';
import GlobalStateContext from '../../context/globalStateContext';

const { Option } = Select;

const mainSelect = [
  { value: 'company', text: 'Company' },
  { value: 'business', text: 'Business' },
  { value: 'productsServices', text: 'Products & Services' },
  { value: 'recruitment', text: 'Recruitment' },
];

export default function SubMenu({ title, subSelectList = [] }) {
  const [newSubSelectList, setNewSubSelectList] = useState(subSelectList);
  const [currentSelect, setCurrentSelect] = useState('');

  const { setSubSelectedComponent } = useContext(GlobalStateContext);

  const onClicktoGoHome = useCallback(() => {
    Router.push('/');
  }, []);

  const onChangeSelect = useCallback(value => {
    setCurrentSelect(value);
    if (value === 'company' || value === 'business' || value === 'productsServices' || value === 'recruitment') {
      Router.push(`/${value}`);
    } else {
      setSubSelectedComponent(value);
    }
  }, []);

  const createSelect = (defaultValue, selectList, width = 250) => {
    return (
      <Select defaultValue={defaultValue} style={{ width: width }} onChange={onChangeSelect}>
        {selectList.map(({ value, text }) => (
          <Option key={value} value={value}>
            {text}
          </Option>
        ))}
      </Select>
    );
  };

  useEffect(() => {
    if (currentSelect === 'keyTechnology') {
      setNewSubSelectList(subSelectList);
    }
    if (currentSelect === 'eGovernment') {
      setNewSubSelectList([subSelectList[0]]);
    }
  }, [currentSelect]);

  return (
    <Container>
      <h2>{title}</h2>
      <MenuContainer>
        <MenuInnerContainer>
          <i onClick={onClicktoGoHome}>
            <HomeIcon />
          </i>
          {createSelect(title, mainSelect)}
          {!!newSubSelectList.length &&
            newSubSelectList.map(subSelect =>
              createSelect(subSelect[0]['text'], subSelect, subSelect[0]['value'] === 'keyTechnology01' ? 400 : 200)
            )}
        </MenuInnerContainer>
      </MenuContainer>
    </Container>
  );
}
