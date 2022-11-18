const ShapeChooser = () => {
  return (
    <div className="flex flex-col gap-2">
      <button
        title="brush"
        className="btn-neutral btn-outline btn-sm btn block"
      >
        <i className="bi bi-brush-fill"></i>
      </button>
      <button
        title="square"
        className="btn-neutral btn-outline btn-sm btn block"
      >
        <i className="bi bi-square"></i>
      </button>
      <button
        title="circle"
        className="btn-neutral btn-outline btn-sm btn block"
      >
        <i className="bi bi-circle"></i>
      </button>
      <button title="text" className="btn-neutral btn-outline btn-sm btn block">
        <i className="bi bi-123"></i>
      </button>
    </div>
  );
};

export default ShapeChooser;
