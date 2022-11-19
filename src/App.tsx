import { useContext } from 'react';
import Toolbar from './components/organisms/Toolbar';
import { BG_CANVAS_ID, canvasSize } from './constants';
import ShapeContext from './context/ShapeContext';

export default function App() {
  const { shapes } = useContext(ShapeContext);

  return (
    <div className="relative hidden h-screen items-center justify-center lg:flex">
      <Toolbar />
      <div
        id="parentElement"
        className={`h-[${canvasSize.height}px] w-[${canvasSize.width}px] relative rounded-lg bg-neutral-content shadow-xl overflow-hidden`}
      >
        <canvas
          id={BG_CANVAS_ID}
          height={canvasSize.height}
          width={canvasSize.width}
        />
      </div>
    </div>
  );
}
