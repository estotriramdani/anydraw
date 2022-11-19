import { useContext } from 'react';
import ColorContext from '../../../context/ColorContext';
import ShapeContext from '../../../context/ShapeContext';
import { createNewCanvas } from '../../../utils';

const ShapeChooser = () => {
  const { setShapes } = useContext(ShapeContext);
  const { color } = useContext(ColorContext);

  const handleAddShape = () => {
    setShapes((prev) => [
      ...prev,
      createNewCanvas({
        fillStyle: color.fillStyle,
        strokeStyle: color.strokeStyle,
      }),
    ]);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs">Shapes</span>
      <button
        title="brush"
        className="btn-outline btn-primary btn-sm btn block"
      >
        <i className="bi bi-brush-fill"></i>
      </button>
      <button
        title="square"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={handleAddShape}
      >
        <i className="bi bi-square"></i>
      </button>
      <button
        title="circle"
        className="btn-outline btn-primary btn-sm btn block"
      >
        <i className="bi bi-circle"></i>
      </button>
      <button title="text" className="btn-outline btn-primary btn-sm btn block">
        <i className="bi bi-123"></i>
      </button>
    </div>
  );
};

export default ShapeChooser;
