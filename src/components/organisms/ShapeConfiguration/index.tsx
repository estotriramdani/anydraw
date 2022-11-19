import { useContext, useEffect, useState } from 'react';
import ShapeContext from '../../../context/ShapeContext';
import { changeShapeProps, createNewCanvas } from '../../../utils';

const Separator = () => {
  return <div className="h-full w-px bg-neutral-content" />;
};

const ShapeConfiguration = () => {
  const { selectedShape, shapes, setShapes } = useContext(ShapeContext);

  if (!selectedShape) return <></>;
  const [newCoordinate, setNewCoordinate] = useState({
    x: selectedShape.params.x,
    y: selectedShape.params.y,
  });

  useEffect(() => {
    setNewCoordinate({
      x: selectedShape.params.x,
      y: selectedShape.params.y,
    });
  }, [selectedShape]);


  const handleChangeSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id, valueAsNumber },
    } = event;
    setNewCoordinate((prev) => ({
      ...prev,
      [id]: valueAsNumber,
    }));
    const copyShapes = [...shapes];
    const indexCurrentShape = copyShapes.findIndex(
      (shape) => shape.id === selectedShape.id
    );
    if (indexCurrentShape === -1) return;
    const newCtx = createNewCanvas({
      ...selectedShape.params,
      x: newCoordinate.x,
      y: newCoordinate.y,
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
            value={newCoordinate.x}
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
            value={newCoordinate.y}
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
