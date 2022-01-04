import React, { useContext, useEffect, useState } from 'react';
import { AppLayout, GoalsVisions, KeyBusiness, SubMenu } from '../../components';
import GlobalStateContext from '../../context/globalStateContext';
import { PageContainer } from '../company/styles';

const subSelectList = [
  [
    { value: 'goalsVisions', text: '목표와 비전' },
    { value: 'keyBusiness', text: '주요사업분야' },
  ],
];

export default function business() {
  const { subSelectedComponent, setSubSelectedComponent } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<GoalsVisions />);

  useEffect(() => {
    if (subSelectedComponent === 'goalsVisions') setSelectedComponent(<GoalsVisions />);
    if (subSelectedComponent === 'keyBusiness') setSelectedComponent(<KeyBusiness />);
  }, [subSelectedComponent]);

  // 페이지에서 나갔을 때 subSelectedComponent 초기값으로 초기화
  useEffect(() => {
    return setSubSelectedComponent('goalsVisions');
  }, []);

  return (
    <AppLayout theme='black'>
      <SubMenu title='Business' subSelectList={subSelectList} />
      <PageContainer>{selectedComponent}</PageContainer>
    </AppLayout>
  );
}
