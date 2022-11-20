import React from 'react';
import { INewCanvas } from '../../../utils';

interface Props {
  handleChangeSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  id: string;
}

const BasicSize = (props: Props) => {
  const { handleChangeSelected, id, value } = props;
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span>{id.toUpperCase()}</span>
      <input
        type="number"
        className="w-10 p-0.5"
        value={value}
        id={id}
        autoComplete="false"
        step={10}
        onChange={handleChangeSelected}
      />
    </div>
  );
};

export default BasicSize;
