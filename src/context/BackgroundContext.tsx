import { createContext, Dispatch, ReactNode, useState } from 'react';

interface IBgContext {
  img?: any;
  setImg: Dispatch<any>
}

const BackgroundContext = createContext({});

export default BackgroundContext;

export const BackgroundContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [img, setImg] = useState<any>();

  return (
    <BackgroundContext.Provider value={{}}>
      {children}
    </BackgroundContext.Provider>
  );
};
