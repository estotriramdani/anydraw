import { useState } from 'react';
import Drawer from './pages/Drawer';
import NestedComments from './pages/NestedComment';

export default function App() {
  const [whichPage, setWhichPage] = useState<'comments' | 'draw'>('draw');

  return (
    <div>
      <div className="w-full bg-secondary p-1 text-center">
        <button
          className="btn-primary btn-sm btn"
          onClick={() =>
            setWhichPage((prev) => {
              return prev === 'comments' ? 'draw' : 'comments';
            })
          }
        >
          Change to {whichPage === 'comments' ? 'Drawer' : 'Nested Comments'}
        </button>
      </div>
      {whichPage === 'draw' && <Drawer />}
      {whichPage === 'comments' && <NestedComments />}
    </div>
  );
}
