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
      currentTarget: { id, valueAsNumber, value },
    } = event;
    let val: string | number = valueAsNumber;
    if (!['x', 'y', 'w', 'h', 'fontSize'].includes(id)) {
      val = value;
    }
    setSelectedShape({
      ...selectedShape,
      params: {
        ...selectedShape.params,
        [id]: val,
      },
    });
    const copyShapes = [...shapes];
    const indexCurrentShape = copyShapes.findIndex(
      (shape) => shape.id === selectedShape.id
    );
    if (indexCurrentShape === -1) return;

    const newCtx = createNewCanvas({
      ...selectedShape.params,
      [id]: val,
      isEditing: true,
    });
    copyShapes[indexCurrentShape] = newCtx;
    setShapes(copyShapes);
  };

  const { params } = selectedShape;
  const arcAndRect = params.shapeType === 'rect' || params.shapeType === 'arc';

  return (
    <div className="fixed inset-x-0 bottom-2 z-10  mx-auto flex justify-center">
      <div className="flex gap-3 rounded-lg bg-neutral p-2 px-3 shadow-lg">
        {params.shapeType !== 'draw' && (
          <>
            <BasicSize
              type="number"
              id="x"
              handleChangeSelected={handleChangeSelected}
              value={params.x}
            />
            <Separator />
            <BasicSize
              type="number"
              id="y"
              handleChangeSelected={handleChangeSelected}
              value={params.y}
            />
          </>
        )}

        {params.shapeType === 'text' && (
          <>
            <Separator />
            <div className="flex items-center gap-1.5 text-sm">
              <span>Text</span>
              <input
                value={params?.text}
                className="w-24 rounded p-0.5 px-1"
                autoComplete="false"
                id="text"
                onChange={handleChangeSelected}
              />
            </div>
            <Separator />
            <div className="flex items-center gap-1.5 text-sm">
              <BasicSize
                label="Font size"
                type="number"
                id="fontSize"
                handleChangeSelected={handleChangeSelected}
                value={params?.fontSize}
              />
            </div>
          </>
        )}
        {arcAndRect && (
          <>
            <Separator />
            <BasicSize
              type="number"
              id="w"
              handleChangeSelected={handleChangeSelected}
              value={params.w}
            />
          </>
        )}
        {params.shapeType === 'rect' && (
          <>
            <Separator />
            <BasicSize
              type="number"
              id="h"
              handleChangeSelected={handleChangeSelected}
              value={params.h}
            />
          </>
        )}
        {params.shapeType !== 'draw' && <Separator />}
        <BasicSize
          label="Color"
          type="color"
          id="fillStyle"
          handleChangeSelected={handleChangeSelected}
          value={params.fillStyle}
        />
        <Separator />
        <BasicSize
          label="Border"
          type="color"
          id="strokeStyle"
          handleChangeSelected={handleChangeSelected}
          value={params.strokeStyle}
        />
      </div>
    </div>
  );
};

export default ShapeConfiguration;
