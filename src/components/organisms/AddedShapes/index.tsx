import { useContext } from 'react';
import ShapeContext from '../../../context/ShapeContext';

const AddedShapes = () => {
  const { shapes, selectedShape } = useContext(ShapeContext);
  return (
    <div className="fixed inset-y-0 right-5 bottom-5 flex flex-col justify-between">
      <div>
        {/* max shape here */}
      </div>
      <ul className="flex flex-col-reverse">
        {shapes.map((shape, index) => (
          <li key={shape.id} className="mb-1">
            <button
              className={`${
                selectedShape === shape.id ? '' : 'btn-outline'
              } btn-primary btn-sm btn`}
            >
              {shape.params.shapeType} #{index}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedShapes;
