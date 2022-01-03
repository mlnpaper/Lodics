import React from 'react'
import GlobalStateContext from './globalStateContext'

export default function GlobalState({ children }) {
  const [subSelectedComponent, setSubSelectedComponent] = useState('')
  return (
    <GlobalStateContext.Provider
      value={{
        subSelectedComponent,
        setSubSelectedComponent,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
