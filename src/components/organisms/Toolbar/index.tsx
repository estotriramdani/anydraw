import Gap from '../../atoms/Gap';
import BackgroundChooser from '../../molecules/BackgroundChooser';
import ColorChooser from '../../molecules/ColorChooser';
import ShapeChooser from '../../molecules/ShapeChoose';

const Toolbar = () => {
  return (
    <div>
      <div className="absolute top-5 left-5 flex w-24 flex-col gap-2 rounded-md bg-neutral p-3">
        <BackgroundChooser />
        <Gap height={5} />
        <ColorChooser />
        <Gap height={5} />
        <ShapeChooser />
      </div>
    </div>
  );
};

export default Toolbar;
