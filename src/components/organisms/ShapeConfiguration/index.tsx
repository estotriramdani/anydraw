import { useContext, useEffect, useState } from 'react';
import ShapeContext from '../../../context/ShapeContext';
import { createNewCanvas } from '../../../utils';

const Separator = () => {
  return <div className="h-full w-px bg-neutral-content" />;
};

const ShapeConfiguration = () => {
  const { selectedShape,setSelectedShape, shapes, setShapes } = useContext(ShapeContext);

  if (!selectedShape) return <></>;

  const handleChangeSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id, valueAsNumber },
    } = event;
    setSelectedShape({
      ...selectedShape,
      params: {
        ...selectedShape.params,
        x: id === 'x' ? valueAsNumber : selectedShape.params.x,
        y: id === 'y' ? valueAsNumber : selectedShape.params.y,
      }
    })
    const copyShapes = [...shapes];
    const indexCurrentShape = copyShapes.findIndex(
      (shape) => shape.id === selectedShape.id
    );
    if (indexCurrentShape === -1) return;
    console.log("🚀 ~ file: index.tsx ~ line 38 ~ handleChangeSelected ~ indexCurrentShape", indexCurrentShape)
    
    const newCtx = createNewCanvas({
      ...selectedShape.params,
      [id]: valueAsNumber,
      isEditing: true,
    });
    copyShapes[indexCurrentShape] = newCtx;
    setShapes(copyShapes);
  };

  return (
    <div className="fixed inset-x-0 bottom-2 z-10  mx-auto flex justify-center">
      <div className="flex gap-3 rounded-lg bg-neutral p-2 px-3 shadow-lg">
        <div className="flex items-center gap-1.5 text-sm">
          <span>X</span>
          <input
            type="number"
            className="w-10 p-0.5"
            value={selectedShape.params.x}
            id="x"
            autoComplete="false"
            step={10}
            onChange={handleChangeSelected}
          />
        </div>
        <Separator />
        <div className="flex items-center gap-1.5 text-sm">
          <span>Y</span>
          <input
            type="number"
            className="w-10 p-0.5"
            value={selectedShape.params.y}
            id="y"
            autoComplete="false"
            step={10}
            onChange={handleChangeSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default ShapeConfiguration;
