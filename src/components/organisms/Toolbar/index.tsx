import ColorChooser from '~/components/molecules/ColorChooser';
import ShapeChooser from '~/components/molecules/ShapeChoose';

const Toolbar = () => {
  return (
    <div>
      <div className="absolute top-5 left-5 flex w-20 flex-col gap-2  rounded-md bg-neutral p-3">
        <ColorChooser />
        <ShapeChooser />
      </div>
    </div>
  );
};

export default Toolbar;
