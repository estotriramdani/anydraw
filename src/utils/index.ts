import { Dispatch } from 'react';
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
    }
  | {
      shapeType: 'arc';
    }
  | {
      shapeType: 'text';
    }
  | {
      shapeType: 'draw';
    };

type CreateNewCanvas = {
  fillStyle: string;
  strokeStyle?: string;
  lineWidth?: number;
  id: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  isEditing?: boolean;
  text?: string;
  fontSize?: number;
} & ShapeAttributes;

export type TShapeType = ShapeAttributes['shapeType'];

export interface INewCanvas {
  id: string;
  newCanvas: HTMLCanvasElement;
  params: CreateNewCanvas;
}

export const createNewCanvas = (params: CreateNewCanvas): INewCanvas => {
  const {
    fillStyle,
    strokeStyle,
    lineWidth,
    shapeType,
    x,
    y,
    isEditing,
    text,
    fontSize,
  } = params;
  const newCanvas = document.createElement('canvas') as HTMLCanvasElement;
  const id = params.id || Math.random().toString();
  newCanvas.id = id;
  newCanvas.className = 'shapes';
  newCanvas.height = canvasSize.height;
  newCanvas.width = canvasSize.width;
  newCanvas.style.position = 'absolute';
  newCanvas.style.top = '0';
  newCanvas.style.left = '0';
  const ctx = newCanvas.getContext('2d')!;
  if (isEditing && shapeType !== 'draw') {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
  }
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle || fillStyle;
  ctx.lineWidth = lineWidth === undefined ? 0 : lineWidth;
  if (shapeType === 'rect') {
    ctx.rect(x, y, params.w || 200, params.h || 200);
    ctx.fill();
  }
  if (shapeType === 'arc') {
    ctx.arc(x, y, params.w || 200, 0, 2 * Math.PI);
    ctx.fill();
  }
  if (shapeType === 'text' && text) {
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillText(text, x, y);
  }
  ctx.stroke();
  return { id, newCanvas, params };
};

export const changeShapeProps = (params: {
  canvasEl: HTMLCanvasElement;
  shapeData: CreateNewCanvas;
}) => {
  const { canvasEl, shapeData } = params;
  if (shapeData.shapeType === 'rect') {
    const { x, y, w, h } = shapeData;
    const ctx = canvasEl.getContext('2d')!;
    ctx.fillStyle = shapeData.fillStyle!;
    ctx.strokeStyle = shapeData.strokeStyle!;
    ctx.lineWidth = shapeData.lineWidth === undefined ? 0 : shapeData.lineWidth;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.rect(x, y, w!, h!);
  }
};

export const removeShape = ({
  setShapes,
  id,
}: {
  setShapes: Dispatch<React.SetStateAction<INewCanvas[]>>;
  id: string;
}) => {
  document.getElementById(id)?.remove();
  setShapes((prev) => prev.filter((prev) => prev.id !== id));
};
