import React, { useState } from 'react';
import GlobalStateContext from './globalStateContext';

export default function GlobalState({ children }) {
  const [subSelectedComponent, setSubSelectedComponent] = useState('');
  const [selectedSubMenu, setSelectedSubMenu] = useState('');

  return (
    <GlobalStateContext.Provider
      value={{
        subSelectedComponent,
        setSubSelectedComponent,
        selectedSubMenu,
        setSelectedSubMenu,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
