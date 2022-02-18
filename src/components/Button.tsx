/* eslint-disable react/require-default-props */
import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  variant?: Variant;
  text: string;
}

function Button({ variant, text }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <button type="button" className="text-md font-medium text-blue-600 hover:text-blue-800">
        {text}
      </button>
    );
  }
  if (variant === 'danger') {
    return (
      <button type="button" disabled className="bg-red-500 text-white font-bold py-2 px-4 rounded">
        {text}
      </button>
    );
  }
  return (
    <div className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded">
      {text}
    </div>
  );
}

export default Button;
