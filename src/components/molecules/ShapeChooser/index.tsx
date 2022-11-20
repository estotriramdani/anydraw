import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import ColorContext from '../../../context/ColorContext';
import ShapeContext from '../../../context/ShapeContext';
import { createNewCanvas, getCanvasEl, TShapeType } from '../../../utils';

const ShapeChooser = () => {
  const { setShapes, lineWidth, selectedShape } = useContext(ShapeContext);
  const { color } = useContext(ColorContext);

  const handleAddShape = ({ shapeType }: { shapeType: TShapeType }) => {
    let text: string = '';
    if (shapeType === 'text') {
      const promptText = prompt('Input your text: ');
      if (!promptText) {
        toast('Text is required!', { icon: '⚠️' });
        return;
      }
      text = promptText;
    }
    setShapes((prev) => [
      ...prev,
      createNewCanvas({
        fillStyle: color.fillStyle,
        strokeStyle: color.strokeStyle,
        lineWidth,
        shapeType,
        x: shapeType === 'arc' ? 100 : 10,
        y: shapeType === 'arc' ? 100 : 10,
        w: 100,
        h: 100,
        id: Math.random().toString(),
        text,
        fontSize: 20,
      }),
    ]);
  };

  useEffect(() => {
    if (selectedShape?.params.shapeType === 'draw') {
      const canvas = getCanvasEl({ id: selectedShape.id });
      console.log(
        '🚀 ~ file: index.tsx ~ line 42 ~ useEffect ~ canvas',
        canvas
      );
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.addEventListener('mousemove', (event) => {
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';
            ctx.lineTo(event.clientX, event.clientY);
            ctx.beginPath();
            ctx.moveTo(event.clientX, event.clientY);
          });
        }
      }
    }
  }, [selectedShape]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs">Shapes</span>
      <button
        title="brush"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: 'draw' })}
      >
        <i className="bi bi-brush-fill"></i>
      </button>
      <button
        title="square"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: 'rect' })}
      >
        <i className="bi bi-square"></i>
      </button>
      <button
        title="circle"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: 'arc' })}
      >
        <i className="bi bi-circle"></i>
      </button>
      <button
        title="text"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: 'text' })}
      >
        <i className="bi bi-123"></i>
      </button>
    </div>
  );
};

export default ShapeChooser;
