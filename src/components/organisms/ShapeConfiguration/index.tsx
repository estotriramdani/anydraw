import { useContext } from 'react';
import ShapeContext from '../../../context/ShapeContext';
import { createNewCanvas } from '../../../utils';
import BasicSize from './BasicSize';

const Separator = () => {
  return <div className="h-full w-px bg-neutral-content" />;
};

const ShapeConfiguration = () => {
  const { selectedShape, setSelectedShape, shapes, setShapes } =
    useContext(ShapeContext);

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
      },
    });
    const copyShapes = [...shapes];
    const indexCurrentShape = copyShapes.findIndex(
      (shape) => shape.id === selectedShape.id
    );
    if (indexCurrentShape === -1) return;

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
        <BasicSize
          id="x"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.x}
        />
        <Separator />
        <BasicSize
          id="y"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.y}
        />
        <Separator />
        <BasicSize
          id="w"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.w}
        />
        <Separator />
        <BasicSize
          id="h"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.h}
        />
      </div>
    </div>
  );
};

export default ShapeConfiguration;
