/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import noop from '../utils/noop';

type ButtonType = 'button' | 'submit';
type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  onClick?: any;
  type?: ButtonType;
}

// TODO: find a way to pass margin and padding
function Button({ variant, children, type = 'button', onClick = noop }: ButtonProps) {
  if (variant === 'secondary') {
    return (
      <button type={type} className="text-md font-medium text-blue-600 hover:text-blue-800" onClick={onClick}>
        {children}
      </button>
    );
  }
  if (variant === 'danger') {
    return (
      <button type={type} disabled className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
