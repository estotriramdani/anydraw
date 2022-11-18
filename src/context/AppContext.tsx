import { createContext, ReactNode } from 'react';

const AppContext = createContext({});

export default AppContext;

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
