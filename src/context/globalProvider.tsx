import React, { useEffect } from 'react'
import { createContext } from "react";
import { PhoneService, usePhone } from '../service/usePhone';


export const GlobalContext = createContext<PhoneService>({} as never)
export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
  const value = usePhone()
  useEffect(() => {
    init()
  }, [])
  const init = async () => await value.loadPhones()
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}


