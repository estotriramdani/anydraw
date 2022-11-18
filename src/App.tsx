import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const canvasFixedSize = {
  width: 500,
  height: 500,
};

const App = () => {
  const [listId, setListId] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles) return;
    if (!acceptedFiles[0].type.includes('image')) return;
    const imageSrc = URL.createObjectURL(acceptedFiles[0]);
    const image = new Image();
    image.src = imageSrc;
    const myCanvas = document.getElementById('mycanvas')! as HTMLCanvasElement;
    const ctx = myCanvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = true;
    image.onload = () => {
      const { width } = image;
      const diff = myCanvas.width / width;
      const finalWidth = canvasFixedSize.width;
      const finalHeight = image.height * diff;
      console.log(myCanvas.width);
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      ctx.drawImage(image, 0, 0, finalWidth, finalHeight);
    };
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const myCanvas = document.getElementById('mycanvas')! as HTMLCanvasElement;
    myCanvas.width = canvasFixedSize.width;
    myCanvas.height = canvasFixedSize.height;
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
    newDiv.height = canvasFixedSize.height;
    newDiv.width = canvasFixedSize.width;
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
    <>
      <div
        id="parentElement"
        className="relative"
        style={{
          width: `${canvasFixedSize.height}px`,
          height: `${canvasFixedSize.height}px`,
        }}
      >
        <canvas
          id="mycanvas"
          style={{
            height: `${canvasFixedSize.height}px`,
            width: `${canvasFixedSize.height}px`,
          }}
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
      <div {...getRootProps()} className="border p-2 mt-5 cursor-pointer">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
};

export default App;
