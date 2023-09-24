/* eslint-disable react/prop-types */
import { createContext } from 'react'

import { data } from '../db'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}
