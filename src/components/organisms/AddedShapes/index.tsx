import { useContext } from 'react';
import ShapeContext from '../../../context/ShapeContext';
import { removeShape } from '../../../utils';

const AddedShapes = () => {
  const {
    shapes,
    setShapes,
    selectedShape,
    setSelectedShape,
    setShapeLoading,
  } = useContext(ShapeContext);

  return (
    <div className="fixed inset-y-0 right-5 bottom-5 z-20 flex flex-col justify-end">
      <ul className="flex flex-col-reverse items-end gap-1">
        {shapes.map((shape, index) => (
          <li key={shape.id} className="mb-1 flex items-center gap-2">
            <button
              className={`${
                selectedShape?.id === shape?.id ? '' : 'btn-outline'
              } btn-primary btn-sm btn`}
              onClick={() => {
                if (selectedShape?.id !== shape?.id) {
                  setShapeLoading(true);
                  setTimeout(() => {
                    setShapeLoading(false);
                    setSelectedShape(shape);
                  }, 1000);
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
                removeShape({ setShapes, id: shape.id });
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
