import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { INewCanvas } from '../utils';

interface IShapeContext {
  setShapes: Dispatch<React.SetStateAction<INewCanvas[]>>;
  shapes: INewCanvas[];
}

const ShapeContext = createContext<IShapeContext>({
  setShapes: () => undefined,
  shapes: [],
});

export default ShapeContext;

export const ShapeContextProvider = ({ children }: { children: ReactNode }) => {
  const [shapes, setShapes] = useState<INewCanvas[]>([]);

  useEffect(() => {
    const parentElement = document.getElementById(
      'parentElement'
    )! as HTMLDivElement;
    shapes.forEach((shape) => {
      parentElement.appendChild(shape.newCanvas);
    });
  }, [shapes]);

  return (
    <ShapeContext.Provider value={{ shapes, setShapes }}>
      {children}
    </ShapeContext.Provider>
  );
};
