import { useContext, useEffect } from 'react';
import ColorContext from '../context/ColorContext';
import ShapeContext from '../context/ShapeContext';
import { getCanvasEl } from '../utils';

const draw = (
  event: MouseEvent,
  ctx: CanvasRenderingContext2D,
  color: string,
  isDrawing?: boolean
) => {
  if (!isDrawing) return;
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  ctx.lineTo(event.clientX - 300, event.clientY - 70);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX - 300, event.clientY - 70);
};

const useDraw = () => {
  const { selectedShape } = useContext(ShapeContext);
  const { color } = useContext(ColorContext);

  useEffect(() => {
    if (selectedShape?.params.shapeType === 'draw') {
      const canvas = getCanvasEl({ id: selectedShape.id });
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let isDraw = false;
      if (!ctx) return;
      canvas.addEventListener('mousedown', (event) => {
        isDraw = true;
        ctx.beginPath();
      });
      canvas.addEventListener('mouseup', (event) => {
        isDraw = false;
        ctx.closePath();
      });
      canvas.addEventListener('mousemove', (event) => {
        if (!isDraw) return;
        draw(event, ctx, color.strokeStyle, isDraw);
      });
    }
  }, [selectedShape, color]);

  return {};
};

export default useDraw;