import { useContext } from "react";
import ShapeContext from "../../../context/ShapeContext";
import { createNewCanvas } from "../../../utils";
import BasicSize from "./BasicSize";

const Separator = () => {
  return <div className="h-full w-px bg-neutral-content" />;
};

const ShapeConfiguration = () => {
  const { selectedShape, setSelectedShape, shapes, setShapes } = useContext(ShapeContext);

  if (!selectedShape) return <></>;

  const handleChangeSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id, valueAsNumber, value },
    } = event;
    let val: string | number = valueAsNumber;
    if (!["x", "y", "w", "h"].includes(id)) {
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
    const indexCurrentShape = copyShapes.findIndex((shape) => shape.id === selectedShape.id);
    if (indexCurrentShape === -1) return;

    const newCtx = createNewCanvas({
      ...selectedShape.params,
      [id]: val,
      isEditing: true,
    });
    copyShapes[indexCurrentShape] = newCtx;
    setShapes(copyShapes);
  };

  return (
    <div className="fixed inset-x-0 bottom-2 z-10  mx-auto flex justify-center">
      <div className="flex gap-3 rounded-lg bg-neutral p-2 px-3 shadow-lg">
        <BasicSize
          type="number"
          id="x"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.x}
        />
        <Separator />
        <BasicSize
          type="number"
          id="y"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.y}
        />
        <Separator />
        <BasicSize
          type="number"
          id="w"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.w}
        />
        {selectedShape.params.shapeType === "rect" && (
          <>
            <Separator />
            <BasicSize
              type="number"
              id="h"
              handleChangeSelected={handleChangeSelected}
              value={selectedShape.params.h}
            />
          </>
        )}
        <Separator />
        <BasicSize
          label="Color"
          type="color"
          id="fillStyle"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.fillStyle}
        />
        <Separator />
        <BasicSize
          label="Border"
          type="color"
          id="strokeStyle"
          handleChangeSelected={handleChangeSelected}
          value={selectedShape.params.strokeStyle}
        />
      </div>
    </div>
  );
};

export default ShapeConfiguration;
