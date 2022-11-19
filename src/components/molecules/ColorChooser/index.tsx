import { useContext } from 'react';
import ColorContext from '../../../context/ColorContext';
import ShapeContext from '../../../context/ShapeContext';

const ColorChooser = () => {
  const { color, setColor } = useContext(ColorContext);
  const { setLineWidth, lineWidth } = useContext(ShapeContext);

  return (
    <div>
      <label htmlFor="color" className="mb-1 block text-xs">
        Color
      </label>
      <input
        type="color"
        className="mb-1 block h-8 w-full rounded-md"
        value={color.fillStyle}
        onChange={(event) =>
          setColor((prev) => ({ ...prev, fillStyle: event.target.value }))
        }
      />
      <label htmlFor="border" className="mb-1 block text-xs">
        Border
      </label>
      <input
        type="color"
        className="mb-1 block h-8 w-full rounded-md"
        value={color.strokeStyle}
        onChange={(event) =>
          setColor((prev) => ({ ...prev, strokeStyle: event.target.value }))
        }
      />
      <label htmlFor="border" className="mb-1 block text-xs">
        Border Width
      </label>
      <input
        type="number"
        className="mb-1 block w-full rounded-sm p-1 text-xs"
        value={lineWidth}
        onChange={(e) => setLineWidth(e.target.valueAsNumber)}
      />
    </div>
  );
};

export default ColorChooser;
