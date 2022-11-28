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
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
};

const useDraw = () => {
  const { selectedShape } = useContext(ShapeContext);
  const { color } = useContext(ColorContext);

  useEffect(() => {
    if (selectedShape?.params.shapeType === 'draw') {
      const canvas = getCanvasEl({ id: selectedShape.id });
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let isDraw = false;
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
    return () => {
      if (selectedShape?.params.shapeType !== 'draw') return;
      const canvas = getCanvasEl({ id: selectedShape.id });
      if (!canvas) return;
      canvas.removeEventListener('mousedown', () => {});
      canvas.removeEventListener('mouseup', () => {});
      canvas.removeEventListener('mousemove', () => {});
    };
  }, [selectedShape, color]);

  return {};
};

export default useDraw;
