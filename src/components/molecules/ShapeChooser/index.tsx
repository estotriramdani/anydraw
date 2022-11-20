import { useContext } from "react";
import toast from "react-hot-toast";
import ColorContext from "../../../context/ColorContext";
import ShapeContext from "../../../context/ShapeContext";
import { createNewCanvas, TShapeType } from "../../../utils";

const ShapeChooser = () => {
  const { setShapes, lineWidth, shapes } = useContext(ShapeContext);
  const { color } = useContext(ColorContext);

  const handleAddShape = ({ shapeType }: { shapeType: TShapeType }) => {
    let text: string = "";
    if (shapeType === "text") {
      const promptText = prompt("Input your text: ");
      if (!promptText) {
        toast("Text is required!", { icon: "⚠️" });
        return;
      }
      text = promptText;
    }
    setShapes((prev) => [
      ...prev,
      createNewCanvas({
        fillStyle: color.fillStyle,
        strokeStyle: color.strokeStyle,
        lineWidth,
        shapeType,
        x: shapeType === "arc" ? 100 : 10,
        y: shapeType === "arc" ? 100 : 10,
        w: 100,
        h: 100,
        id: Math.random().toString(),
        text,
        fontSize: 20
      }),
    ]);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs">Shapes</span>
      <button title="brush" className="btn-outline btn-primary btn-sm btn block">
        <i className="bi bi-brush-fill"></i>
      </button>
      <button
        title="square"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: "rect" })}
      >
        <i className="bi bi-square"></i>
      </button>
      <button
        title="circle"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: "arc" })}
      >
        <i className="bi bi-circle"></i>
      </button>
      <button
        title="text"
        className="btn-outline btn-primary btn-sm btn block"
        onClick={() => handleAddShape({ shapeType: "text" })}
      >
        <i className="bi bi-123"></i>
      </button>
    </div>
  );
};

export default ShapeChooser;
