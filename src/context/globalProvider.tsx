import React from 'react'
import { createContext } from "react";
import { PhoneService, usePhone } from '../service/usePhone';


export const GlobalContext = createContext<PhoneService>({} as never)
export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
  const value = usePhone()
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}


