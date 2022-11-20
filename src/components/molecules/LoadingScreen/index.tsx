import { useContext } from 'react';
import ShapeContext from '../../../context/ShapeContext';

const LoadingScreen = () => {
  const { shapeLoading } = useContext(ShapeContext);

  return (
    <div
      className={`glass fixed top-0 left-0 inset-0 z-[100] flex h-full w-full ${
        shapeLoading ? '' : 'translate-x-full'
      } items-center justify-center duration-500`}
    >
      <i className="bi bi-asterisk animate-spin text-4xl text-primary"></i>
    </div>
  );
};

export default LoadingScreen;
