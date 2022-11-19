import { useContext } from 'react';
import ShapeContext from '../../../context/ShapeContext';
import { createNewCanvas } from '../../../utils';

const ShapeChooser = () => {
  const { setShapes } = useContext(ShapeContext);

  const handleAddShape = ({ fillStyle }: { fillStyle?: string }) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setShapes((prev) => [
      ...prev,
      createNewCanvas({
        fillStyle: fillStyle || `#${randomColor}`,
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
        onClick={() => handleAddShape({})}
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
