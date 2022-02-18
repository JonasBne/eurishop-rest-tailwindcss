/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import noop from '../utils/noop';

type ButtonType = 'button' | 'submit';
type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  variant: Variant;
  children: ReactNode;
  onClick?: any;
  type?: ButtonType;
  className?: string;
}

function Button({ variant, className, children, type = 'button', onClick = noop }: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(className, 'hover:cursor-pointer', 'text-white', 'font-bold', {
        rounded: variant === 'primary' || variant === 'danger',
        'bg-blue-600 hover:bg-blue-800 ': variant === 'primary',
        'text-blue-500 hover:text-blue-700': variant === 'secondary',
        'bg-red-500 hover:bg-red-700': variant === 'danger',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
