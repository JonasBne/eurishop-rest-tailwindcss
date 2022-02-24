import React, { ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
}

function Overlay({ children }: OverlayProps) {
  return (
    <div className="fixed top-40 left-2/4 w-fit bg-white p-2 rounded-md shadow-2xl z-30">
      <div>{children}</div>
    </div>
  );
}

export default Overlay;
