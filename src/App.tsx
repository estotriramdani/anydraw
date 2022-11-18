import Toolbar from './components/organisms/Toolbar';
import { BG_CANVAS_ID, canvasSize } from './constants';

export default function App() {
  return (
    <div className="relative hidden h-screen items-center justify-center lg:flex">
      <Toolbar />
      <div
        id="parentElement"
        className={`h-[${canvasSize.height}px] w-[${canvasSize.width}px] rounded-lg bg-neutral-content shadow`}
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
