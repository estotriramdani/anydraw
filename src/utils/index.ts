export const getCanvasCtx = ({ id }: { id: string }) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  return ctx;
};
