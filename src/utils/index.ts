import { canvasSize } from '../constants';

export const getCanvasCtx = ({ id }: { id: string }) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  return ctx;
};

export const getCanvasEl = ({ id }: { id: string }) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!canvas) return;
  return canvas;
};

type ShapeAttributes =
  | {
      shapeType: 'rect';
      w?: number;
      h?: number;
    }
  | {
      shapeType: 'arc';
    }
  | {
      shapeType: 'line';
    };

type CreateNewCanvas = {
  fillStyle: string;
  strokeStyle?: string;
  lineWidth?: number;
  x?: number;
  y?: number;
} & ShapeAttributes;

export type TShapeType = ShapeAttributes['shapeType'];

export interface INewCanvas {
  id: string;
  newCanvas: HTMLCanvasElement;
  params: CreateNewCanvas;
}

export const createNewCanvas = (params: CreateNewCanvas): INewCanvas => {
  const { fillStyle, strokeStyle, lineWidth, shapeType, x, y } = params;
  const newCanvas = document.createElement('canvas') as HTMLCanvasElement;
  const id = Math.random().toString();
  newCanvas.id = id;
  newCanvas.height = canvasSize.height;
  newCanvas.width = canvasSize.width;
  newCanvas.style.position = 'absolute';
  newCanvas.style.top = '0';
  newCanvas.style.left = '0';
  const ctx = newCanvas.getContext('2d')!;
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle || fillStyle;
  ctx.lineWidth = lineWidth === undefined ? 0 : lineWidth;
  if (shapeType === 'rect') {
    ctx.rect(x || 0, y || 0, params.w || 200, params.h || 200);
    ctx.fill();
    if (strokeStyle) ctx.stroke();
  }
  return { id, newCanvas, params };
};
