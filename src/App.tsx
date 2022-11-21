import { useContext } from 'react';
import LoadingScreen from './components/molecules/LoadingScreen';
import AddedShapes from './components/organisms/AddedShapes';
import ShapeConfiguration from './components/organisms/ShapeConfiguration';
import Toolbar from './components/organisms/Toolbar';
import { BG_CANVAS_ID, canvasSize } from './constants';
import ShapeContext from './context/ShapeContext';

export default function App() {
  const { selectedShape } = useContext(ShapeContext);

  return (
    <div className="relative hidden h-screen items-center justify-center lg:flex">
      <LoadingScreen />
      <Toolbar />
      <div
        id="parentElement"
        className={`relative overflow-hidden rounded-lg bg-neutral-content shadow-xl`}
        style={{ width: canvasSize.width, height: canvasSize.height }}
      >
        <canvas
          id={BG_CANVAS_ID}
          height={canvasSize.height}
          width={canvasSize.width}
        />
      </div>
      <AddedShapes />
      {selectedShape ? <ShapeConfiguration /> : null}
    </div>
  );
}
