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

type CreateNewCanvas = {
  fillStyle: string;
  strokeStyle?: string;
};

export interface INewCanvas {
  id: string;
  newCanvas: HTMLCanvasElement;
}

export const createNewCanvas = (params: CreateNewCanvas): INewCanvas => {
  const { fillStyle, strokeStyle } = params;
  const newCanvas = document.createElement('canvas') as HTMLCanvasElement;
  const id = Math.random().toString();
  newCanvas.id = id;
  newCanvas.height = canvasSize.height;
  newCanvas.width = canvasSize.width;
  newCanvas.style.position = 'absolute';
  newCanvas.style.top = '0';
  newCanvas.style.left = '0';
  // const parentElement = document.getElementById(
  //   'parentElement'
  // )! as HTMLDivElement;
  // parentElement.appendChild(newCanvas);
  const ctx = newCanvas.getContext('2d')!;
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle || fillStyle;
  ctx.rect(100 * Math.random(), 100 * Math.random(), 200, 200);
  ctx.fill();
  ctx.stroke();
  return { id, newCanvas };
};
