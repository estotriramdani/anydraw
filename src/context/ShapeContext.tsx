import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { INewCanvas } from '../utils';

interface IShapeContext {
  setShapes: Dispatch<React.SetStateAction<INewCanvas[]>>;
  shapes: INewCanvas[];
  setLineWidth: Dispatch<React.SetStateAction<number>>;
  lineWidth: number;
}

const ShapeContext = createContext<IShapeContext>({
  setShapes: () => undefined,
  shapes: [],
  setLineWidth: () => undefined,
  lineWidth: 5,
});

export default ShapeContext;

export const ShapeContextProvider = ({ children }: { children: ReactNode }) => {
  const [shapes, setShapes] = useState<INewCanvas[]>([]);
  const [lineWidth, setLineWidth] = useState(5);

  useEffect(() => {
    const parentElement = document.getElementById(
      'parentElement'
    )! as HTMLDivElement;
    shapes.forEach((shape) => {
      parentElement.appendChild(shape.newCanvas);
    });
  }, [shapes]);

  return (
    <ShapeContext.Provider
      value={{ shapes, setShapes, lineWidth, setLineWidth }}
    >
      {children}
    </ShapeContext.Provider>
  );
};
