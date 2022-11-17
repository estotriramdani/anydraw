import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const myCanvas = document.getElementById('mycanvas')! as HTMLCanvasElement;
    const ctx = myCanvas.getContext('2d')!;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.rect(0, 0, 100, 100);
    ctx.fill();
    ctx.stroke();
  }, []);

  const clear = () => {
    const myCanvas = document.getElementById('mycanvas')! as HTMLCanvasElement;
    const ctx = myCanvas.getContext('2d')!;
    ctx.clearRect(0, 0, 50, 50);
  };

  return (
    <div>
      <canvas
        id="mycanvas"
        style={{ height: '80vh', width: '50vw' }}
        className="border"
      ></canvas>
      <button>clear</button>
    </div>
  );
};

export default App;
