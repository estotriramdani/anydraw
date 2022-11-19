import { createContext, ReactNode, useState } from 'react';

const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

interface IColorContext {
  setColor: React.Dispatch<
    React.SetStateAction<{
      fillStyle: string;
      strokeStyle: string;
    }>
  >;
  color: {
    fillStyle: string;
    strokeStyle: string;
  };
}

const ColorContext = createContext<IColorContext>({
  color: {
    fillStyle: random,
    strokeStyle: random,
  },
  setColor: () => undefined,
});

export default ColorContext;

export const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState({
    fillStyle: random,
    strokeStyle: random,
  });
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
