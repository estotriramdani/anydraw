import Toolbar from './components/organisms/Toolbar';
import { canvasSize } from './contants';

export default function App() {
  return (
    <div className="relative hidden h-screen items-center justify-center lg:flex">
      <Toolbar />
      <div
        id="parentElement"
        className={`h-[${canvasSize.height}px] w-[${canvasSize.width}px] rounded-lg bg-neutral-content shadow`}
      >
        <canvas
          id="backgroundCanvas"
          height={canvasSize.height}
          width={canvasSize.width}
        />
      </div>
    </div>
  );
}
