import React from "react";

interface Props {
  handleChangeSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number | string;
  id: string;
  type: "number" | "color" | "text";
  label?: string;
  disabled?: boolean;
}

const BasicSize = (props: Props) => {
  const { handleChangeSelected, id, value, type, label, disabled } = props;
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span>{label || id.toUpperCase()}</span>
      <input
        type={type}
        className="w-14 rounded p-0.5 px-1"
        value={value}
        id={id}
        autoComplete="false"
        step={type === "number" ? 10 : undefined}
        onChange={handleChangeSelected}
        disabled={disabled}
      />
    </div>
  );
};

export default BasicSize;
