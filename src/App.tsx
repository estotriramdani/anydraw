export default function App() {
  return (
    <div className="relative hidden h-screen items-center justify-center lg:flex">
      <div className="absolute top-5 left-5 flex w-20 flex-col gap-2  rounded-md bg-neutral p-3">
        <div className="flex flex-col items-center gap-2">
          <input type="color" className="block h-8 w-8" />
          <input type="color" className="block h-8 w-8" />
        </div>
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
          <button
            title="text"
            className="btn-neutral btn-outline btn-sm btn block"
          >
            <i className="bi bi-123"></i>
          </button>
        </div>
      </div>
      <div
        id="parentElement"
        className="h-[500px] w-[500px] bg-neutral-content"
      ></div>
    </div>
  );
}
