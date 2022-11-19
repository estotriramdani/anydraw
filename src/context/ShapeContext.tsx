import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';
import { INewCanvas } from '../utils';

interface IShapeContext {
  setShapes: Dispatch<React.SetStateAction<INewCanvas[]>>;
  shapes: INewCanvas[];
  setLineWidth: Dispatch<React.SetStateAction<number>>;
  lineWidth: number;
  selectedShape?: INewCanvas;
  setSelectedShape: Dispatch<React.SetStateAction<INewCanvas | undefined>>;
}

const ShapeContext = createContext<IShapeContext>({
  setShapes: () => undefined,
  shapes: [],
  setLineWidth: () => undefined,
  lineWidth: 5,
  setSelectedShape: () => undefined,
});

export default ShapeContext;

export const ShapeContextProvider = ({ children }: { children: ReactNode }) => {
  const [shapes, setShapes] = useState<INewCanvas[]>([]);
  const [selectedShape, setSelectedShape] = useState<INewCanvas>();
  const [lineWidth, setLineWidth] = useState(5);

  useEffect(() => {
    const parentElement = document.getElementById(
      'parentElement'
    )! as HTMLDivElement;
    const canvasShapes = document.getElementsByClassName('shapes');
    for (let index = 0; index < canvasShapes.length; index++) {
      const element = canvasShapes[index];
      parentElement.removeChild(element);
    }
    shapes.forEach((shape, index) => {
      parentElement.appendChild(shape.newCanvas);
    });
  }, [shapes]);

  return (
    <ShapeContext.Provider
      value={{
        shapes,
        setShapes,
        lineWidth,
        setLineWidth,
        selectedShape,
        setSelectedShape,
      }}
    >
      {children}
    </ShapeContext.Provider>
  );
};
