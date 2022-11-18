const ColorChooser = () => {
  return (
    <div className="">
      <label htmlFor="color" className="block text-xs mb-1">
        Color
      </label>
      <input
        type="color"
        className="mb-1 block h-8 w-full rounded-md"
        value="#fafafa"
        id="color"
      />
      <label htmlFor="border" className="block text-xs mb-1">
        Border
      </label>
      <input
        type="color"
        id="border"
        className="block h-8 w-full rounded-md"
        value="#fafafa"
      />
    </div>
  );
};

export default ColorChooser;
