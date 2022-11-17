import { useEffect, useState } from 'react';

const App = () => {
  const [listId, setListId] = useState<string[]>([]);
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
  /* // TODO
    1 ATUR Z-INDEX PER Canvas (listId ditambah property zIndex)
    2 custom color (background and stroke)
    3 insert rect
    4 insert arc
    5 insert image
    6 drag canvas
    7 scale image
  */
  const removeCanvas = (id: string) => {
    document.getElementById(id)!.remove();
    setListId((prev) => prev.filter((item) => item !== id));
  };

  const createNewCanvas = () => {
    const newDiv = document.createElement('canvas') as HTMLCanvasElement;
    const id = Math.random().toString();
    newDiv.id = id;
    setListId((prev) => [...prev, id]);
    newDiv.style.height = '80vh';
    newDiv.style.width = '50vw';
    newDiv.style.position = 'absolute';
    newDiv.style.top = '0';
    newDiv.style.left = '0';
    const parentElement = document.getElementById(
      'parentElement'
    )! as HTMLDivElement;
    parentElement.appendChild(newDiv);
    const ctx = newDiv.getContext('2d')!;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.rect(100 * Math.random(), 100 * Math.random(), 200, 200);
    ctx.fill();
    ctx.stroke();
  };

  return (
    <div
      id="parentElement"
      className="relative"
      style={{ width: '50vw', height: '80vh' }}
    >
      <canvas
        id="mycanvas"
        style={{ height: '80vh', width: '50vw' }}
        className="border absolute top-0 left-0"
      ></canvas>
      <button onClick={createNewCanvas} className="fixed right-0">
        new canvas
      </button>
      <div className="fixed bottom-0 right-0">
        <ul>
          {listId.map((item) => (
            <li key={item}>
              <button onClick={() => removeCanvas(item)}>
                Remove Item {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
