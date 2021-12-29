import React, { useContext, useEffect, useState } from 'react';
import { AppLayout, CeoGreeting, Certification, History, Location, SubMenu } from '../../components';
import styled from 'styled-components';
import GlobalStateContext from '../../context/globalStateContext';
import { palette } from '../../styles/color';

export const PageContainer = styled.section`
  width: 1200px;
  margin: 8rem auto;
  color: ${palette.themeBlack};
`;

const subSelectList = [
  [
    { value: 'ceoGreeting', text: 'CEO 인사말' },
    { value: 'history', text: '연혁' },
    { value: 'certification', text: '인증현황' },
    { value: 'location', text: '회사위치' },
  ],
];

export default function company() {
  const { subSelectedComponent } = useContext(GlobalStateContext);
  const [selectedComponent, setSelectedComponent] = useState(<CeoGreeting />);

  useEffect(() => {
    console.log(subSelectedComponent);
    if (subSelectedComponent === 'ceoGreeting') setSelectedComponent(<CeoGreeting />);
    if (subSelectedComponent === 'history') setSelectedComponent(<History />);
    if (subSelectedComponent === 'certification') setSelectedComponent(<Certification />);
    if (subSelectedComponent === 'location') setSelectedComponent(<Location />);
  }, [subSelectedComponent]);

  return (
    <AppLayout theme='black'>
      <SubMenu title='Company' subSelectList={subSelectList} />
      <PageContainer>{selectedComponent}</PageContainer>
    </AppLayout>
  );
}
