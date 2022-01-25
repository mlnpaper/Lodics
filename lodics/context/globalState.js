import React, { useState } from 'react';

import { GlobalStateContext } from 'context';

export default function GlobalState({ children }) {
  const [subSelectedComponent, setSubSelectedComponent] = useState('');
  const [selectedSubMenu, setSelectedSubMenu] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <GlobalStateContext.Provider
      value={{
        subSelectedComponent,
        setSubSelectedComponent,
        selectedSubMenu,
        setSelectedSubMenu,
        selectedMenu,
        setSelectedMenu,
        language,
        setLanguage,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}
