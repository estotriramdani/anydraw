import { ReactNode } from 'react';
import Compose from './Compose';
import { ShapeContextProvider } from './ShapeContext';

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return <Compose components={[ShapeContextProvider]}>{children}</Compose>;
};
