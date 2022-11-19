import { useContext } from 'react';
import ShapeContext from '../../../context/ShapeContext';

const AddedShapes = () => {
  const { shapes, setShapes, selectedShape, setSelectedShape } =
    useContext(ShapeContext);
  return (
    <div className="fixed inset-y-0 right-5 bottom-5 z-20 flex flex-col justify-between">
      <div>{/* max shape here */}</div>
      <ul className="flex flex-col-reverse">
        {shapes.map((shape, index) => (
          <li key={shape.id} className="mb-1 flex items-center gap-2">
            <button
              className={`${
                selectedShape?.id === shape?.id ? '' : 'btn-outline'
              } btn-primary btn-sm btn`}
              onClick={() => {
                if (selectedShape?.id !== shape?.id) {
                  setSelectedShape(shape);
                } else {
                  setSelectedShape(undefined);
                }
              }}
            >
              {shape.params.shapeType} #{index}
            </button>
            <button
              className="btn-error btn-sm btn"
              onClick={() => {
                setSelectedShape(undefined);
                setShapes((prev) =>
                  prev.filter((shape2) => shape2.id !== shape.id)
                );
              }}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedShapes;
