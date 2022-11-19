import { useContext } from 'react';
import ColorContext from '../../../context/ColorContext';

const ColorChooser = () => {
  const { color, setColor } = useContext(ColorContext);

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
        className="block h-8 w-full rounded-md"
        value={color.strokeStyle}
        onChange={(event) =>
          setColor((prev) => ({ ...prev, strokeStyle: event.target.value }))
        }
      />
    </div>
  );
};

export default ColorChooser;
