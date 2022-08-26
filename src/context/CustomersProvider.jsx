import React, { createContext } from "react";

export const CustomerContext = createContext()

const CustomersProvider = ({children}) => {

    const contexto = {

    }

  return (
    <CustomerContext.Provider value={contexto}>
        {children}
    </CustomerContext.Provider>
  )
}

export default CustomersProvider