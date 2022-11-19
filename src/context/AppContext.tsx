import { ReactNode } from 'react';
import { ColorContextProvider } from './ColorContext';
import Compose from './Compose';
import { ShapeContextProvider } from './ShapeContext';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Compose components={[ShapeContextProvider, ColorContextProvider]}>
      {children}
    </Compose>
  );
};
